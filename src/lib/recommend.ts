const tasteKey: Record<string, string> = {
  süss: "sweet",
  sauer: "sour",
  fruchtig: "fruit",
  bitter: "bitter",
  herb: "herb",
  frisch: "fresh",
  cremig: "creamy",
  scharf: "spicy",
  spritzig: "spritzig",
};

const w: Record<string, number> = {
  sweet: 1.0,
  sour: 1.2,
  fruit: 1.05,
  bitter: 1.25,
  herb: 1.1,
  fresh: 1.3,
  creamy: 0.9,
  spicy: 0.95,
  spritzig: 1.15,
};

const allTasteKeys = [
  "sweet",
  "sour",
  "fruit",
  "bitter",
  "herb",
  "fresh",
  "creamy",
  "spicy",
  "spritzig",
];

function strengthRange(strengthPref?: string | null): [number, number] | null {
  if (!strengthPref || strengthPref === "egal") return null;
  if (strengthPref === "leicht") return [1, 2];
  if (strengthPref === "mittel") return [2, 4];
  if (strengthPref === "heroisch") return [4, 5];
  return null;
}

type Drink = Record<string, any>;
type Prefs = {
  tastes?: string[];
  alcoholPref?: string;
  strengthPref?: string;
};

export function recommendAll(drinks: Drink[], prefs: Prefs): Drink[] {
  const { tastes = [], alcoholPref = "mit", strengthPref = "egal" } = prefs;

  // 1) Alkohol-Filter
  let filtered = drinks.filter((d) => {
    const a = Number(d.alcohol ?? 0);

    if (alcoholPref === "ohne") return a === 0;
    return a >= 1;
  });

  // 2) Stärke-Filter
  const range = strengthRange(strengthPref);
  if (range && alcoholPref !== "ohne") {
    const [minS, maxS] = range;
    filtered = filtered.filter((d) => {
      const a = Number(d.alcohol ?? 0);
      return a >= minS && a <= maxS;
    });
  }

  // 3) Fallback wenn Stärke zu strikt
  if (filtered.length === 0 && range && alcoholPref !== "ohne") {
    if (strengthPref === "heroisch") {
      const heroic5 = drinks.filter((d) => Number(d.alcohol ?? 0) === 5);
      filtered = heroic5.length
        ? heroic5
        : drinks.filter((d) => Number(d.alcohol ?? 0) === 4);
    } else {
      filtered = drinks.filter((d) => Number(d.alcohol ?? 0) >= 1);
    }
  }

  const selected = tastes.length ? tastes : ["frisch"];
  const selectedKeys = selected.map((t) => tasteKey[t]).filter(Boolean);

  const wantsFresh = selected.includes("frisch");
  const wantsSpritzig = selected.includes("spritzig");

  const ranked = filtered.map((d) => {
    let score = 0;
    let strongMatches = 0;
    let allAbove3 = true;
    const selectedValues: number[] = [];

    // Gewählte Geschmäcker bewerten
    for (const t of selected) {
      const key = tasteKey[t];
      if (!key) continue;

      const v = Math.max(0, Math.min(5, Number(d[key] ?? 0)));
      selectedValues.push(v);

      score += v * (w[key] ?? 1);

      if (v >= 4) strongMatches++;
      if (v < 3) allAbove3 = false;
      if (v <= 1) score -= 5;
    }

    if (strongMatches >= 2) score += 6;
    if (allAbove3) score += 4;

    // 1) Bessere Balance: ungleichgewicht leicht bestrafen
    if (selectedValues.length >= 2) {
      const max = Math.max(...selectedValues);
      const min = Math.min(...selectedValues);
      const spread = max - min;
      score -= spread * 1.5;
    }

    // 2) Nicht gewählte starke Geschmäcker leicht bestrafen
    for (const key of allTasteKeys) {
      if (selectedKeys.includes(key)) continue;

      const v = Math.max(0, Math.min(5, Number(d[key] ?? 0)));

      if (v >= 4) score -= 1.5;
      else if (v === 3) score -= 0.5;
    }

    // Heroisch: 5 bevorzugen, 4 leicht zurückstufen
    if (strengthPref === "heroisch") {
      const a = Number(d.alcohol ?? 0);
      if (a === 5) score += 2.5;
      if (a === 4) score -= 1.5;
    }

    // Frisch gewählt, aber nicht spritzig:
    // zu spritzige Drinks leicht bestrafen
    if (wantsFresh && !wantsSpritzig) {
      const spritzigValue = Math.max(
        0,
        Math.min(5, Number(d.spritzig ?? 0))
      );

      if (spritzigValue === 5) score -= 3;
      else if (spritzigValue === 4) score -= 1.5;
    }

    return { ...d, score };
  });

  ranked.sort((a, b) => b.score - a.score);
  return ranked;
}

export function recommend(drinks: Drink[], prefs: Prefs): Drink[] {
  return recommendAll(drinks, prefs).slice(0, 3);
}