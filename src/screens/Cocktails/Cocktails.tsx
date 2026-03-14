import { useEffect, useMemo, useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { selectDrink } from "../../lib/selectedDrink";
import { supabase } from "../../lib/supabase";

type CatalogDrink = {
  id: string;
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

const FILTER_ORDER = [
  "süss",
  "sauer",
  "fruchtig",
  "cremig",
  "bitter",
  "scharf",
  "herb",
  "spritzig",
  "frisch",
  "alkoholfrei",
  "alkoholisch",
] as const;

const filterMap: Record<string, keyof CatalogDrink> = {
  süss: "sweet",
  sauer: "sour",
  fruchtig: "fruit",
  cremig: "creamy",
  bitter: "bitter",
  scharf: "spicy",
  herb: "herb",
  spritzig: "spritzig",
  frisch: "fresh",
};

const formatIngredients = (ingredients: string) =>
  ingredients.replace(/\s*\n\s*/g, " ").trim();

const CocktailCard = ({
  name,
  ingredients,
  price,
  onClick,
}: {
  name: string;
  ingredients: string;
  price: string;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="relative w-full min-h-[112px] bg-[#2e2e2e] border border-[#3a3a3a] cursor-pointer hover:bg-[#3a3a3a] transition-colors overflow-hidden"
  >
    <div className="w-[88px] h-full min-h-[112px] bg-[#ff383c] absolute top-0 left-0" />
    <div className="ml-[88px] min-h-[112px] pl-5 pr-14 py-3 flex flex-col justify-start">
      <div className="[font-family:'Roboto',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[1.15] break-words">
        {name}
      </div>
      <div className="mt-3 [font-family:'Roboto',Helvetica] font-light text-white text-[13px] tracking-[0] leading-[1.35] break-words max-w-[190px]">
        {formatIngredients(ingredients)}
      </div>
    </div>
    <div className="absolute top-3 right-4 text-sm [font-family:'Roboto',Helvetica] font-medium text-white leading-none whitespace-nowrap">
      ⓘ
    </div>
    <div className="absolute bottom-3 right-4 [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
      {price}
    </div>
  </div>
);

const matchesFilter = (drink: CatalogDrink, filter: string) => {
  if (filter === "alkoholfrei") return drink.alcohol === 0;
  if (filter === "alkoholisch") return drink.alcohol >= 1;
  const key = filterMap[filter];
  if (!key) return true;
  return Number(drink[key] ?? 0) >= 3;
};

const groupCatalogDrinks = (drinks: CatalogDrink[]) => {
  const grouped = drinks.reduce<Record<string, CatalogDrink[]>>((acc, drink) => {
    if (!acc[drink.section]) {
      acc[drink.section] = [];
    }
    acc[drink.section].push(drink);
    return acc;
  }, {});

  return Object.entries(grouped).sort((a, b) => {
    const orderA = a[1][0]?.sectionOrder ?? 999;
    const orderB = b[1][0]?.sectionOrder ?? 999;
    return orderA - orderB;
  });
};

export const Cocktails = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [cocktailCatalog, setCocktailCatalog] = useState<CatalogDrink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((value) => value !== filter)
        : [...prev, filter]
    );
  };

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("drinks")
          .select("*")
          .eq("category", "cocktail")
          .order("name", { ascending: true });

        if (error) {
          console.error("Supabase cocktails error:", error);
          setError(error.message);
          return;
        }

        const mapped: CatalogDrink[] = (data ?? []).map((drink: any) => ({
          id: String(drink.id),
          name: String(drink.name ?? ""),
          section: String(drink.section ?? ""),
          sectionOrder: Number(drink.section_order ?? 999),
          ingredients: Array.isArray(drink.ingredients)
            ? drink.ingredients.join(", ")
            : String(drink.ingredients ?? ""),
          description: String(drink.description ?? ""),
          tags: Array.isArray(drink.tags) ? drink.tags : [],
          price:
            drink.price != null && drink.price !== ""
              ? `CHF ${Number(drink.price).toFixed(2)}`
              : "",
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
        }));

        setCocktailCatalog(mapped);
      } catch (err: any) {
        console.error("Load cocktails crash:", err);
        setError(err?.message || "Unbekannter Fehler");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filteredDrinks = useMemo(() => {
    if (selectedFilters.length === 0) return cocktailCatalog;
    return cocktailCatalog.filter((drink) =>
      selectedFilters.every((filter) => matchesFilter(drink, filter))
    );
  }, [selectedFilters, cocktailCatalog]);

  const groupedDrinks = useMemo(
    () => groupCatalogDrinks(filteredDrinks),
    [filteredDrinks]
  );

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] bg-[#121212] overflow-y-auto translate-y-[-1rem] animate-fade-in opacity-0 pt-8">
        <header className="px-4 pt-7 flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={() => navigate("/menu")}
            className="p-0 hover:bg-transparent"
          >
            <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
          </Button>
          <h1 className="[font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal]">
            Cocktails
          </h1>
        </header>

        <div className="px-4 pt-7 flex flex-wrap gap-3 max-w-[328px]">
          {FILTER_ORDER.map((tag) => {
            const isSelected = selectedFilters.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleFilter(tag)}
                aria-pressed={isSelected}
                className={`rounded-[8px] px-3 py-[6px] [font-family:'Roboto',Helvetica] font-medium text-base text-white transition-colors ${
                  isSelected
                    ? "bg-[#5a0835]"
                    : "bg-[#8f0f57] hover:bg-[#7a0d4a]"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="px-4 pt-9 pb-10 flex flex-col gap-8 w-full max-w-[360px]">
          {loading ? (
            <div className="w-[328px] text-white [font-family:'Roboto',Helvetica] font-light text-sm leading-6">
              Cocktails werden geladen...
            </div>
          ) : error ? (
            <div className="w-[328px] text-red-300 [font-family:'Roboto',Helvetica] font-light text-sm leading-6">
              {error}
            </div>
          ) : groupedDrinks.length === 0 ? (
            <div className="w-[328px] text-white [font-family:'Roboto',Helvetica] font-light text-sm leading-6">
              Für diese Kombination wurden keine Cocktails gefunden.
            </div>
          ) : (
            groupedDrinks.map(([section, drinks]) => (
              <section
                key={section}
                className="w-[328px] flex flex-col items-start gap-4"
              >
                <h2 className="[font-family:'Roboto',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-[normal] uppercase">
                  {section}
                </h2>
                {drinks.map((drink) => (
                  <CocktailCard
                    key={drink.id}
                    name={drink.name}
                    ingredients={drink.ingredients}
                    price={drink.price}
                    onClick={() => {
                      selectDrink(drink.name, "/cocktails");
                      navigate("/cocktail-detail");
                    }}
                  />
                ))}
              </section>
            ))
          )}
        </div>
      </section>
    </div>
  );
};
