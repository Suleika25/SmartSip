import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { getCatalogDrinkByName } from "../../data/cocktailCatalog";
import { getSelectedDrinkBackRoute, getSelectedDrinkName } from "../../lib/selectedDrink";

export const CocktailDetail = (): JSX.Element => {
  const navigate = useNavigate();
  const selectedDrinkName = getSelectedDrinkName();
  const backRoute = getSelectedDrinkBackRoute();
  const drink = getCatalogDrinkByName(selectedDrinkName) ?? getCatalogDrinkByName("Japanese Spring");

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="flex w-[360px] h-[800px] relative flex-col items-start gap-4 pt-14 pb-8 px-4 bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0">
        <Button
          variant="ghost"
          onClick={() => navigate(backRoute)}
          className="p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
        <h2 className="absolute top-[56px] left-24 [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Cocktail Detail
        </h2>
        <Card className="flex flex-col w-[306px] h-[378px] items-start gap-4 p-5 absolute top-[202px] left-[22px] bg-[#3a3a3a] rounded-2xl shadow-[0px_4px_4px_#00000040] border-0">
          <CardContent className="p-0 w-full">
            <h3 className="rotate-[0.78deg] [font-family:'Roboto',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
              {drink?.name}
            </h3>
            <p className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap mt-4 uppercase">
              {drink?.section}
            </p>
            <p className="w-[285px] [font-family:'Roboto',Helvetica] font-light text-[#dbdbdb] text-lg tracking-[0.90px] leading-[normal] mt-[50px]">
              {drink?.description}
            </p>
            <div className="flex gap-2 mt-[58px] flex-wrap max-w-[260px]">
              {(drink?.tags ?? []).slice(0, 4).map((tag) => (
                <Badge
                  key={tag}
                  className="bg-[#6c0b40] hover:bg-[#6c0b40] border border-[#2a2a2a] [font-family:'Roboto',Helvetica] font-normal text-sm text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="absolute top-[659px] left-4 w-[337px] font-medium text-base [font-family:'Roboto',Helvetica] text-white tracking-[0] leading-[normal]">
          Unsicher bei der Auswahl?
          <br />
          <br />
          Lass dich beraten!
        </div>
        <Button
          onClick={() => navigate('/ai-recommendation')}
          className="absolute top-[728px] left-[15px] w-[329px] h-12 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]"
        >
          KI-Cocktailempfehlung
        </Button>
      </section>
    </div>
  );
};
