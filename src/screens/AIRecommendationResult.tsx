import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import drinks from "../../data/drinks_matrix_0503.json";
import { getCatalogDrinkByName } from "../../data/cocktailCatalog";
import { clearAIPrefs, loadAIPrefs } from "../../lib/aiPrefs";
import { recommend } from "../../lib/recommend";
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

  const recommendedDrinks = recommend(drinks as any[], prefs).map((drink) => {
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

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] bg-[#121212] flex flex-col px-4 pt-6 pb-6 animate-fade-in opacity-0">
        <div className="w-full">
          <div className="w-full relative flex items-center justify-center pt-1">
            <Button
              variant="ghost"
              onClick={() => navigate('/ai-recommendation-step2')}
              className="absolute left-0 top-0 p-0 hover:bg-transparent"
            >
              <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
            </Button>

            <h2 className="[font-family:'Roboto',Helvetica] font-medium text-white text-[22px] tracking-[-0.52px] leading-[normal] text-center">
              KI-Cocktailempfehlung
            </h2>
          </div>

          <h3 className="w-full mt-12 [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal] text-left pl-2">
            Das empfehlen wir dir heute:
          </h3>

          <div className="w-full flex flex-col items-center gap-4 mt-8">
            {recommendedDrinks.map((drink, index) => (
              <CocktailCard
                key={`${drink.name}-${index}`}
                {...drink}
                onClick={() => {
                  selectDrink(drink.name, '/ai-recommendation-result');
                  navigate('/cocktail-detail');
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-auto w-full flex justify-center pb-1">
          <Button
            onClick={() => {
              clearAIPrefs();
              navigate('/ai-recommendation');
            }}
            className="w-[329px] h-12 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]"
          >
            Neue Empfehlung
          </Button>
        </div>
      </section>
    </div>
  );
};
