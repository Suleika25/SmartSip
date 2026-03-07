export type AIPrefs = {
  tastes: string[];
  alcoholPref: "mit" | "ohne";
  strengthPref: "egal" | "leicht" | "mittel" | "heroisch";
};

const STORAGE_KEY = "smartsip-ai-prefs";

export const defaultPrefs: AIPrefs = {
  tastes: [],
  alcoholPref: "mit",
  strengthPref: "egal",
};

export function loadAIPrefs(): AIPrefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultPrefs;
    const parsed = JSON.parse(raw);
    return {
      tastes: Array.isArray(parsed?.tastes) ? parsed.tastes : [],
      alcoholPref: parsed?.alcoholPref === "ohne" ? "ohne" : "mit",
      strengthPref:
        parsed?.strengthPref === "leicht" ||
        parsed?.strengthPref === "mittel" ||
        parsed?.strengthPref === "heroisch" ||
        parsed?.strengthPref === "egal"
          ? parsed.strengthPref
          : "egal",
    };
  } catch {
    return defaultPrefs;
  }
}

export function saveAIPrefs(prefs: AIPrefs): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export function clearAIPrefs(): void {
  localStorage.removeItem(STORAGE_KEY);
}
