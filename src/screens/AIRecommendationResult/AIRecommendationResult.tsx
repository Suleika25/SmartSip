import { useMemo, useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import drinks from "../../data/drinks_matrix_0503.json";
import { getCatalogDrinkByName } from "../../data/cocktailCatalog";
import { clearAIPrefs, loadAIPrefs } from "../../lib/aiPrefs";
import { recommendAll } from "../../lib/recommend";
import { selectDrink } from "../../lib/selectedDrink";

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
    className="relative w-[328px] min-h-[112px] bg-[#2e2e2e] border border-[#3a3a3a] cursor-pointer hover:bg-[#3a3a3a] transition-colors overflow-hidden"
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

export const AIRecommendationResult = (): JSX.Element => {
  const navigate = useNavigate();
  const prefs = loadAIPrefs();

  // 0 = Drinks 1-3
  // 1 = Drinks 4-6
  // 2 = Drinks 7-9
  const [pageIndex, setPageIndex] = useState(0);
  const [showRetryMessage, setShowRetryMessage] = useState(false);

  const allRecommendedDrinks = useMemo(() => {
    return recommendAll(drinks as any[], prefs).map((drink) => {
      const catalogDrink = getCatalogDrinkByName(String(drink.name ?? ""));
      return {
        name: String(drink.name ?? "Unbekannter Drink"),
        ingredients:
          catalogDrink?.ingredients ??
          String(drink.ingredients ?? "").replace(/\|/g, ", "),
        price:
          catalogDrink?.price ??
          (drink.price != null
            ? String(drink.price)
            : drink.alcohol != null
              ? String(drink.alcohol)
              : ""),
      };
    });
  }, [prefs]);

  const visibleDrinks = allRecommendedDrinks.slice(
    pageIndex * 3,
    pageIndex * 3 + 3
  );

  const handleNewRecommendation = () => {
    if (showRetryMessage) {
      clearAIPrefs();
      navigate("/ai-recommendation");
      return;
    }

    if (pageIndex < 2) {
      setPageIndex((prev) => prev + 1);
      return;
    }

    setShowRetryMessage(true);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] bg-[#121212] flex flex-col justify-between px-4 pt-6 pb-4 animate-fade-in opacity-0">
        <div className="w-full relative flex items-center justify-center pt-1">
          <Button
            variant="ghost"
            onClick={() => navigate("/ai-recommendation-step2")}
            className="absolute left-0 top-0 p-0 hover:bg-transparent"
          >
            <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
          </Button>

          <h2 className="[font-family:'Roboto',Helvetica] font-medium text-white text-[22px] tracking-[-0.52px] leading-[normal] text-center">
            KI-Cocktailempfehlung
          </h2>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h3 className="w-full mb-10 [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal] text-left pl-2">
            Das empfehlen wir dir heute:
          </h3>

          <div className="w-full flex flex-col items-center gap-4">
            {visibleDrinks.map((drink, index) => (
              <CocktailCard
                key={`${drink.name}-${pageIndex}-${index}`}
                {...drink}
                onClick={() => {
                  selectDrink(drink.name, "/ai-recommendation-result");
                  navigate("/cocktail-detail");
                }}
              />
            ))}
          </div>

          {showRetryMessage && (
            <p className="mt-8 px-4 text-center [font-family:'Roboto',Helvetica] font-normal text-white text-sm leading-[1.4]">
              Haben dir die vorgeschlagenen Drinks nicht zugesagt? Versuche es
              doch mal mit anderen Geschmacksrichtungen.
            </p>
          )}
        </div>

        <div className="w-full flex justify-center">
          <Button
            onClick={handleNewRecommendation}
            className="w-[329px] h-12 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]"
          >
            Neue Empfehlung
          </Button>
        </div>
      </section>
    </div>
  );
};