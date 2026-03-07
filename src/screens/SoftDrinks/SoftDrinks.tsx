import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export const SoftDrinks = (): JSX.Element => {
  const softDrinks = [
    { name: "Coca Cola", price: "5", info: false },
    { name: "Coca Cola Zero", price: "5", info: false },
    { name: "Sinalco", price: "5", info: false },
    { name: "Rivella", subtitle: "Rot, Blau", price: "5", info: true },
    { name: "Elmer Citro", price: "5", info: true },
    {
      name: "Fizzy",
      subtitle: "Mandarine, Himbeere, \nHeidelbeere und Zitrone",
      price: "5",
      info: true,
    },
    {
      name: "Hausgemachter Ice Tea",
      subtitle: "Schwarztee basis",
      price: "5",
      info: true,
    },
    { name: "Tony Mate", price: "5", info: true },
    { name: "Almdudler", price: "5", info: true },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] relative bg-[#121212] overflow-y-scroll translate-y-[-1rem] animate-fade-in opacity-0 pt-8">
        <div className="flex flex-col w-[328px] items-start gap-4 absolute top-[128px] left-4">
          <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Softgetränke in der Flasche
          </h3>
          {softDrinks.map((drink, index) => (
            <div
              key={index}
              className="relative self-stretch w-full h-28 bg-[#2e2e2e] border border-[#3a3a3a]"
            >
              <div className="absolute top-11 left-24 [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {drink.name}
              </div>
              {drink.subtitle && (
                <div className="absolute top-[75px] left-24 [font-family:'Roboto',Helvetica] font-extralight text-white text-sm tracking-[0] leading-[normal]">
                  {drink.subtitle}
                </div>
              )}
              <div className="w-[88px] h-28 bg-[#ff383c] absolute top-0 left-0" />
              <div className="absolute top-[84px] left-[302px] [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {drink.price}
              </div>
              {drink.info && (
                <div className="absolute top-2 left-[304px] text-sm tracking-[0] [font-family:'Roboto',Helvetica] font-medium text-white leading-[normal] whitespace-nowrap">
                  ⓘ
                </div>
              )}
            </div>
          ))}
        </div>
        <h2 className="absolute top-[69px] left-[104px] [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Softgetränke
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
