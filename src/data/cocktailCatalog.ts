import rawDrinks from "./drinks_matrix_0503.json";

export type CatalogDrink = {
  name: string;
  section: string;
  sectionOrder: number;
  ingredients: string;
  description: string;
  tags: string[];
  price: string;
  alcohol: number;
  sweet: number;
  sour: number;
  fruit: number;
  bitter: number;
  herb: number;
  fresh: number;
  creamy: number;
  spicy: number;
  spritzig: number;
};

type RawDrink = {
  name: string;
  category: string;
  subcategory?: string;
  alcohol?: number;
  sweet?: number;
  sour?: number;
  fruit?: number;
  bitter?: number;
  herb?: number;
  fresh?: number;
  creamy?: number;
  spicy?: number;
  spritzig?: number;
  tags?: string;
  ingredients?: string;
};

const detailMap: Record<string, { description: string; tags?: string[] }> = {
  "Aperol Spritz": {
    description:
      "Frisch, leicht bitter und angenehm fruchtig. Der perfekte Aperitif für einen entspannten Start in den Abend.",
    tags: ["frisch", "bitter", "fruchtig", "leicht"],
  },
  "Aperol Spicy Ginger": {
    description:
      "Bitter-süss trifft auf würzige Ingwerschärfe. Ein moderner Spritz mit extra Kick.",
    tags: ["bitter", "süss", "scharf", "spritzig"],
  },
  "Limoncello Spritz": {
    description: "Zitronig, spritzig und sonnig. Mediterranes Lebensgefühl im Glas.",
    tags: ["zitrus", "spritzig", "frisch", "fruchtig"],
  },
  "Sarti Spritz": {
    description:
      "Fruchtig-bitter mit eleganter Leichtigkeit. Ideal für alle, die es weniger süss mögen.",
    tags: ["fruchtig", "bitter", "leicht", "spritzig"],
  },
  Hugo: {
    description: "Blumig, frisch und leicht süss. Holunder, Minze und Prosecco in perfekter Harmonie.",
    tags: ["floral", "frisch", "süss", "spritzig"],
  },
  "Lillet Tonic": {
    description: "Trocken, fein herb und elegant. Ein klassischer Aperitif mit Stil.",
    tags: ["herb", "trocken", "leicht", "elegant"],
  },
  "Vermouth Tonic": {
    description: "Kräuterig, erfrischend und leicht bitter. Ideal für Liebhaber trockener Drinks.",
    tags: ["kräuterig", "bitter", "frisch", "trocken"],
  },
  Americano: {
    description:
      "Ein klassischer, alkoholarmer Aperitif aus Campari und rotem Vermouth. Bittere Kräuternoten treffen auf feine Süsse und Frische durch Soda. Elegant, leicht und perfekt als Einstieg in den Abend.",
    tags: ["bitter", "kräuterig", "leicht", "frisch"],
  },
  "Amaretto Sour": {
    description: "Mandelige Süsse trifft auf frische Zitrone. Cremig, weich und ausgewogen.",
    tags: ["süss", "sauer", "cremig", "weich"],
  },
  "Whisky Sour": {
    description: "Kräftiger Whisky, frische Säure und samtige Textur. Ein zeitloser Klassiker.",
    tags: ["sauer", "kräftig", "cremig", "klassisch"],
  },
  "Pisco Sour": {
    description:
      "Der südamerikanische Klassiker überzeugt mit cremiger Textur und lebendiger Frische. Pisco bringt florale und fruchtige Noten, die perfekt mit Zitrus und feiner Süße harmonieren. Elegant, ausgewogen und überraschend leicht.",
    tags: ["cremig", "frisch", "fruchtig", "floral"],
  },
  Mojito: {
    description: "Minzig, frisch und leicht süss. Der Inbegriff eines Sommerdrinks.",
    tags: ["frisch", "minzig", "süss", "leicht"],
  },
  "Kiwi Mojito": {
    description: "Fruchtig-frisch mit exotischer Kiwi. Ein moderner Twist.",
    tags: ["fruchtig", "frisch", "exotisch", "leicht"],
  },
  "Mango Mojito": {
    description: "Saftig, tropisch und erfrischend. Pures Sommerfeeling.",
    tags: ["tropisch", "fruchtig", "frisch", "süss"],
  },
  "Strawberry Mojito": {
    description: "Beerig, frisch und leicht süss. Fruchtig-verspielt.",
    tags: ["beerig", "frisch", "süss", "fruchtig"],
  },
  Caipirinha: {
    description: "Kräftig, frisch und leicht süss-sauer. Brasilianischer Klassiker mit Charakter.",
    tags: ["frisch", "süss", "sauer", "kräftig"],
  },
  "Singapore Sling": {
    description:
      "Ein legendärer Cocktail mit beeindruckender Komplexität. Fruchtige, würzige und leicht bittere Noten verschmelzen zu einem vielschichtigen Geschmackserlebnis. Elegant, exotisch und überraschend tief.",
    tags: ["fruchtig", "würzig", "bitter", "komplex"],
  },
  "Old Fashioned": {
    description:
      "Einer der ältesten Cocktails der Welt. Kräftiger Whisky trifft auf dezente Süße und feine Würze. Reduziert, elegant und zeitlos – purer Genuss ohne Ablenkung.",
    tags: ["kräftig", "würzig", "süss", "elegant"],
  },
  Grasshopper: {
    description: "Cremig, süss und minzig. Ein klassischer Dessertcocktail.",
    tags: ["cremig", "süss", "minzig", "dessert"],
  },
  Boulevardier: {
    description:
      "Die whiskybetonte Schwester des Negroni. Warm, bitter und vollmundig mit Noten von Holz, Kräutern und feiner Süße. Elegant und kraftvoll.",
    tags: ["bitter", "kräftig", "kräuterig", "vollmundig"],
  },
  "Mai Tai": {
    description:
      "Ein ikonischer Tiki-Klassiker mit Tiefe. Verschiedene Rums, Limette und Mandelnoten sorgen für tropische Komplexität statt einfacher Süße.",
    tags: ["tropisch", "fruchtig", "komplex", "nussig"],
  },
  "Pina Colada": {
    description: "Cremig, süss und exotisch. Urlaub im Glas.",
    tags: ["cremig", "süss", "tropisch", "exotisch"],
  },
  Cosmopolitan: {
    description: "Fruchtig, frisch und leicht herb. Stilvoller Klassiker.",
    tags: ["fruchtig", "frisch", "herb", "elegant"],
  },
  "Long Island Ice Tea": {
    description: "Kräftig, überraschend ausgewogen und süffig. Mehr Cocktail als sein Ruf.",
    tags: ["kräftig", "ausgewogen", "süffig", "klassisch"],
  },
  "White Russian": {
    description: "Cremig, süss und weich. Vodka, Kaffee und Rahm perfekt vereint.",
    tags: ["cremig", "süss", "weich", "kaffee"],
  },
  Alexander: {
    description: "Schokoladig, cremig und elegant. Ein klassischer After-Dinner-Drink.",
    tags: ["schokoladig", "cremig", "süss", "elegant"],
  },
  Daiquiri: {
    description:
      "Ein puristischer Klassiker, der Balance verlangt. Rum, Limette und Zucker in perfektem Verhältnis – frisch, klar und kompromisslos.",
    tags: ["frisch", "sauer", "klar", "klassisch"],
  },
  Margarita: {
    description: "Frisch, sauer und leicht salzig. Ein zeitloser Tequila-Klassiker.",
    tags: ["frisch", "sauer", "salzig", "klassisch"],
  },
  Negroni: {
    description:
      "Ikonisch, bitter und kraftvoll. Kräuterige Tiefe, elegante Bitterkeit und große Komplexität. Ein Drink für Liebhaber intensiver Aromen.",
    tags: ["bitter", "kräuterig", "kräftig", "komplex"],
  },
  "Dry Martini": {
    description: "Extrem trocken, klar und elegant. Reduziert auf das Wesentliche – ein Statement im Glas.",
    tags: ["trocken", "klar", "elegant", "puristisch"],
  },
  "Espresso Martini": {
    description: "Kräftig, leicht süss und belebend. Perfekt nach dem Essen.",
    tags: ["kräftig", "süss", "belebend", "kaffee"],
  },
  Manhattan: {
    description: "Würzig, elegant und stark. Whisky und Vermouth in perfekter Balance.",
    tags: ["würzig", "elegant", "stark", "ausgewogen"],
  },
  "Hanky Panky": {
    description: "Trocken, kräuterig und komplex. Fernet Branca verleiht Tiefe und Charakter.",
    tags: ["trocken", "kräuterig", "komplex", "kräftig"],
  },
  Bijou: {
    description: "Intensiv, würzig und aromatisch. Ein kraftvoller Gin-Cocktail mit Kräutertiefe.",
    tags: ["würzig", "aromatisch", "kräuterig", "kräftig"],
  },
  Martinez: {
    description: "Der elegante Vorläufer des Martini. Leicht süss, aromatisch und sehr ausgewogen.",
    tags: ["süss", "aromatisch", "elegant", "ausgewogen"],
  },
  Bramble: {
    description: "Beerig, frisch und leicht süss. Moderner Klassiker mit Brombeere.",
    tags: ["beerig", "frisch", "süss", "modern"],
  },
  "Paper Plane": {
    description:
      "Ein moderner Klassiker mit perfekter Balance aus süss, sauer und bitter. Zugänglich, aber überraschend komplex.",
    tags: ["süss", "sauer", "bitter", "komplex"],
  },
  "Army & Navy": {
    description: "Frisch, nussig und zitronig. Elegant und leicht.",
    tags: ["frisch", "nussig", "zitrus", "leicht"],
  },
  Penicillin: {
    description:
      "Ein moderner Whisky-Klassiker. Honig, Ingwer, Zitrus und ein Hauch Rauch verbinden sich zu beeindruckender Tiefe.",
    tags: ["würzig", "rauchig", "frisch", "komplex"],
  },
  "Dark & Stormy": {
    description: "Würzig, frisch und leicht scharf. Rum trifft Ingwer.",
    tags: ["würzig", "frisch", "scharf", "kräftig"],
  },
  "Clover Club": {
    description: "Cremig, fruchtig und elegant. Ein klassisches Rezept in moderner Interpretation.",
    tags: ["cremig", "fruchtig", "elegant", "klassisch"],
  },
  "Naked & Famous": {
    description: "Rauchig, bitter und komplex. Mezcal, Chartreuse und Aperol in perfekter Spannung.",
    tags: ["rauchig", "bitter", "komplex", "intensiv"],
  },
  "Pornstar Martini": {
    description: "Exotisch, fruchtig und verspielt. Serviert mit Prosecco-Shot.",
    tags: ["exotisch", "fruchtig", "süss", "verspielt"],
  },
  Aviation: {
    description: "Florale Eleganz mit feiner Säure. Ein wunderschön ausbalancierter Klassiker.",
    tags: ["floral", "elegant", "sauer", "ausgewogen"],
  },
  "Last Word": {
    description: "Vier Zutaten, perfekte Balance. Kräuterig, frisch und intensiv.",
    tags: ["kräuterig", "frisch", "intensiv", "ausgewogen"],
  },
  "French 75": {
    description: "Frisch, prickelnd und elegant. Gin trifft Prosecco.",
    tags: ["frisch", "spritzig", "elegant", "leicht"],
  },
  "East 8 Hold Up": {
    description: "Fruchtig, komplex und modern. Ein Aushängeschild moderner Barkultur.",
    tags: ["fruchtig", "komplex", "modern", "tropisch"],
  },
  "Jungle Bird": {
    description: "Tropisch, bitter und kraftvoll. Campari verleiht Tiefe und Charakter.",
    tags: ["tropisch", "bitter", "kräftig", "komplex"],
  },
  "Oax Old Fashioned": {
    description: "Rauchig, warm und elegant. Tequila und Mezcal neu interpretiert.",
    tags: ["rauchig", "warm", "elegant", "kräftig"],
  },
  "Picante de la Casa": {
    description: "Frisch, würzig und scharf. Lebendig und mutig.",
    tags: ["frisch", "würzig", "scharf", "mutig"],
  },
  "Elderflower Collins": {
    description: "Leicht, floral und erfrischend. Perfekt für warme Tage.",
    tags: ["leicht", "floral", "frisch", "spritzig"],
  },
  "Bone Dry Martini": {
    description: "Extrem trocken, klar und kompromisslos. Für Liebhaber purer Aromen.",
    tags: ["trocken", "klar", "puristisch", "kräftig"],
  },
  "Gin Basil Smash": {
    description: "Grün, frisch und aromatisch. Basilikum trifft Zitrus in perfekter Balance.",
    tags: ["grün", "frisch", "aromatisch", "kräuterig"],
  },
  "Vesper Martini": {
    description: "Kräftig, trocken und stilvoll. Berühmt durch James Bond.",
    tags: ["kräftig", "trocken", "stilvoll", "elegant"],
  },
  Toronto: {
    description: "Kräftig, bitter und würzig. Whisky mit Fernet-Tiefe.",
    tags: ["kräftig", "bitter", "würzig", "komplex"],
  },
  "Black Manhattan": {
    description: "Elegant, bitter und komplex. Amaro ersetzt Vermouth und verleiht Tiefe.",
    tags: ["elegant", "bitter", "komplex", "kräftig"],
  },
  "Spicy Mezcalita": {
    description: "Rauchig, frisch und scharf. Intensiver Mezcal-Genuss.",
    tags: ["rauchig", "frisch", "scharf", "intensiv"],
  },
  "Japanese Spring": {
    description: "Florale Frische und exotische Eleganz. Zitronengras und Lychee sorgen für Leichtigkeit und Tiefe.",
    tags: ["floral", "frisch", "exotisch", "elegant"],
  },
  "Paraiso Tropical": {
    description: "Fruchtig, süss und tropisch. Urlaub im Glas.",
    tags: ["fruchtig", "süss", "tropisch", "exotisch"],
  },
  "Red Hot Chili Pepper": {
    description: "Fruchtige Süße trifft intensive Schärfe. Ein mutiger, lebendiger Cocktail.",
    tags: ["fruchtig", "süss", "scharf", "mutig"],
  },
  "Sovjet Sip": {
    description: "Cremig, süss und außergewöhnlich. Nussige Noten und weisse Schokolade in perfekter Harmonie.",
    tags: ["cremig", "süss", "nussig", "außergewöhnlich"],
  },
  "Lemon Meringue": {
    description: "Zitronig, cremig und leicht süss. Dessert im Cocktailglas.",
    tags: ["zitrus", "cremig", "süss", "dessert"],
  },
  "Rosemary Mate": {
    description: "Herb, aromatisch und erfrischend. Kräuter und Mate in spannender Balance.",
    tags: ["herb", "aromatisch", "frisch", "kräuterig"],
  },
  "Mate Mint Mule": {
    description: "Frisch, leicht herb und belebend. Moderner Highball mit Mate.",
    tags: ["frisch", "herb", "belebend", "leicht"],
  },
  "Fiery Mango Daiquiri": {
    description: "Tropische Frucht, frische Säure und feine Schärfe. Spannend und ausgewogen.",
    tags: ["tropisch", "frisch", "scharf", "ausgewogen"],
  },
  "Butterscotch Russian": {
    description: "Cremig, süss und karamellig. Ein weicher Dessertcocktail.",
    tags: ["cremig", "süss", "karamellig", "dessert"],
  },
  "Smoked Butterscotch Whisky": {
    description: "Rauchig, süss und kraftvoll. Tiefe, Wärme und Charakter.",
    tags: ["rauchig", "süss", "kräftig", "warm"],
  },
  Hatano: {
    description: "Würzig, frisch und komplex. Ingwer, Rosmarin und Grapefruit in eleganter Balance.",
    tags: ["würzig", "frisch", "komplex", "elegant"],
  },
  "Maracuja Sour": {
    description: "Exotisch, frisch und doch cremig. Fruchtige Tiefe mit feiner Bitterkeit.",
    tags: ["exotisch", "frisch", "cremig", "bitter"],
  },
  "Tropic Thunder": {
    description: "Fruchtig, süss und exotisch.",
    tags: ["fruchtig", "süss", "tropisch", "alkoholfrei"],
  },
  "Golden Nugget": {
    description: "Frisch, fruchtig und leicht süss.",
    tags: ["frisch", "fruchtig", "süss", "alkoholfrei"],
  },
  "Virgin Mojito": {
    description: "Minzig, frisch und alkoholfrei.",
    tags: ["frisch", "minzig", "leicht", "alkoholfrei"],
  },
  "Virgin Gin Tonic": {
    description: "Trocken, herb und erfrischend.",
    tags: ["trocken", "herb", "frisch", "alkoholfrei"],
  },
  "Berry Fizz": {
    description: "Beerig, frisch und leicht säuerlich.",
    tags: ["beerig", "frisch", "sauer", "alkoholfrei"],
  },
  "Citrus Highball": {
    description: "Spritzig, frisch und klar.",
    tags: ["spritzig", "frisch", "klar", "alkoholfrei"],
  },
  "Garden Spritz": {
    description: "Grün, kräuterig und erfrischend.",
    tags: ["grün", "kräuterig", "frisch", "alkoholfrei"],
  },
  "Bitter Spritz": {
    description: "Herb und bitter und aperitifartig.",
    tags: ["bitter", "herb", "spritzig", "alkoholfrei"],
  },
  "Virgin Spicy Ginger Mule": {
    description: "Würzig, frisch und leicht scharf.",
    tags: ["würzig", "frisch", "scharf", "alkoholfrei"],
  },
  "Virgin Smoky Paloma": {
    description: "Bitter, fruchtig und rauchig – ganz ohne Alkohol.",
    tags: ["bitter", "fruchtig", "rauchig", "alkoholfrei"],
  },
  "Virgin Colada": {
    description: "Cremig, süss und tropisch.",
    tags: ["cremig", "süss", "tropisch", "alkoholfrei"],
  },
  "Virgin Cucumber Tonic": {
    description: "Trocken, frisch und minimalistisch.",
    tags: ["trocken", "frisch", "klar", "alkoholfrei"],
  },
  "Lavendel Lemonade": {
    description: "Floral, frisch und elegant.",
    tags: ["floral", "frisch", "elegant", "alkoholfrei"],
  },
  "Dry Grapefruit Spritz": {
    description: "Fruchtig, bitter und trocken.",
    tags: ["fruchtig", "bitter", "trocken", "alkoholfrei"],
  },
};

const priceMap: Record<string, string> = {
  "Aperitif & Spritz": "12",
  Sours: "16",
  "Mojito & Caipirinha": "16",
  Classics: "16",
  "Modern Classics": "16",
  "Signature Cocktails": "10",
  Mocktails: "10",
};

const sectionConfig = (drink: RawDrink) => {
  if (drink.category === "Aperitif & Spritz") return { section: "APERO & SPRITZ", order: 1 };
  if (drink.category === "Sours") return { section: "SOUR'S", order: 2 };
  if (drink.category === "Mojito & Caipirinha") return { section: "MOJITO & CAIPIRINHA", order: 3 };
  if (drink.category === "Mocktails") return { section: "MOCKTAILS", order: 7 };
  if (drink.subcategory === "classic") return { section: "CLASSIC COCKTAILS", order: 4 };
  if (drink.subcategory === "modern") return { section: "MODERN CLASSICS", order: 5 };
  if (drink.subcategory === "signature") return { section: "SIGNATURE DRINKS", order: 6 };
  return null;
};

const cleanTags = (drink: RawDrink): string[] => {
  const fromDetail = detailMap[drink.name]?.tags;
  if (fromDetail?.length) return fromDetail.slice(0, 4);
  return String(drink.tags ?? "")
    .split("|")
    .map((tag) => tag.replaceAll("_", " ").trim())
    .filter(Boolean)
    .slice(0, 4);
};

const cleanIngredients = (drink: RawDrink): string =>
  String(drink.ingredients ?? "")
    .replaceAll("|", ", ")
    .replace(/\s+/g, " ")
    .trim();

export const cocktailCatalog: CatalogDrink[] = (rawDrinks as RawDrink[])
  .filter((drink) => String(drink.name ?? "").trim())
  .map((drink) => {
    const cfg = sectionConfig(drink);
    if (!cfg) return null;

    const sectionPriceKey =
      cfg.section === "CLASSIC COCKTAILS"
        ? "Classics"
        : cfg.section === "MODERN CLASSICS"
          ? "Modern Classics"
          : cfg.section === "SIGNATURE DRINKS"
            ? "Signature Cocktails"
            : cfg.section === "MOCKTAILS"
              ? "Mocktails"
              : cfg.section === "SOUR'S"
                ? "Sours"
                : cfg.section === "MOJITO & CAIPIRINHA"
                  ? "Mojito & Caipirinha"
                  : "Aperitif & Spritz";

    return {
      name: drink.name,
      section: cfg.section,
      sectionOrder: cfg.order,
      ingredients: cleanIngredients(drink),
      description: detailMap[drink.name]?.description ?? cleanIngredients(drink),
      tags: cleanTags(drink),
      price: priceMap[sectionPriceKey] ?? "16",
      alcohol: Number(drink.alcohol ?? 0),
      sweet: Number(drink.sweet ?? 0),
      sour: Number(drink.sour ?? 0),
      fruit: Number(drink.fruit ?? 0),
      bitter: Number(drink.bitter ?? 0),
      herb: Number(drink.herb ?? 0),
      fresh: Number(drink.fresh ?? 0),
      creamy: Number(drink.creamy ?? 0),
      spicy: Number(drink.spicy ?? 0),
      spritzig: Number(drink.spritzig ?? 0),
    } satisfies CatalogDrink;
  })
  .filter(Boolean) as CatalogDrink[];

export const getCatalogDrinkByName = (name: string | null | undefined) =>
  cocktailCatalog.find((drink) => drink.name === name);

export const getGroupedCatalogDrinks = (drinks: CatalogDrink[]) => {
  const groups = drinks.reduce<Record<string, CatalogDrink[]>>((acc, drink) => {
    if (!acc[drink.section]) acc[drink.section] = [];
    acc[drink.section].push(drink);
    return acc;
  }, {});

  return Object.entries(groups).sort((a, b) => {
    const orderA = a[1][0]?.sectionOrder ?? 999;
    const orderB = b[1][0]?.sectionOrder ?? 999;
    return orderA - orderB;
  });
};
