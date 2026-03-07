import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export const Beer = (): JSX.Element => {
  const beerBottles = [
    { name: "Feldschlösschen", price: "6" },
    { name: "Heineken", price: "6" },
    { name: "Schneider Weisse", price: "6" },
    { name: "Corona", price: "6" },
    { name: "Präsidente", price: "6" },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] relative bg-[#121212] overflow-y-scroll translate-y-[-1rem] animate-fade-in opacity-0 pt-8">
        <div className="flex w-[328px] absolute top-[168px] left-4 flex-col items-start gap-4">
          <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Flaschen
          </h3>
          {beerBottles.map((beer, index) => (
            <div
              key={index}
              className="relative self-stretch w-full h-28 bg-[#2e2e2e] border border-[#3a3a3a]"
            >
              <div className="absolute top-11 left-[108px] [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {beer.name}
              </div>
              <div className="w-[88px] h-28 bg-[#ff383c] absolute top-0 left-0" />
              <div className="top-[85px] left-[305px] absolute [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {beer.price}
              </div>
              <div className="absolute top-[11px] left-[304px] text-sm tracking-[0] [font-family:'Roboto',Helvetica] font-medium text-white leading-[normal] whitespace-nowrap">
                ⓘ
              </div>
            </div>
          ))}
        </div>
        <h2 className="absolute top-[63px] left-[122px] [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Bier
        </h2>
        <Button
          variant="ghost"
          onClick={() => window.location.href = '/menu'}
          className="absolute top-[50px] left-6 p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>
    </div>
  );
};
