import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export const Wine = (): JSX.Element => {
  const whiteWines = [
    { name: "Chardonnay", price: "6" },
    { name: "Pinot Grigio", price: "6" },
    { name: "Riesling Silvaner", price: "6" },
    { name: "Chasselas", price: "6" },
  ];

  const redWines = [
    { name: "Chasselas", price: "6" },
    { name: "Chasselas", price: "6" },
    { name: "Chasselas", price: "6" },
    { name: "Chasselas", price: "6" },
    { name: "Chasselas", price: "6" },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] relative bg-[#121212] overflow-y-scroll translate-y-[-1rem] animate-fade-in opacity-0 pt-8">
        <div className="inline-flex flex-col items-start gap-4 absolute top-[705px] left-4">
          <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Rotwein
          </h3>
          {redWines.map((wine, index) => (
            <div
              key={index}
              className="h-28 bg-[#2e2e2e] border border-[#3a3a3a] w-[328px] relative"
            >
              <div className="left-[99px] absolute top-11 [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {wine.name}
              </div>
              <div className="w-[88px] h-28 bg-[#ff383c] absolute top-0 left-0" />
              <div className="absolute top-[9px] left-[301px] text-sm tracking-[0] [font-family:'Roboto',Helvetica] font-medium text-white leading-[normal] whitespace-nowrap">
                ⓘ
              </div>
              <div className="top-[87px] left-[307px] absolute [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {wine.price}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-[328px] items-start gap-4 absolute top-[144px] left-4">
          <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Weisswein
          </h3>
          {whiteWines.map((wine, index) => (
            <div
              key={index}
              className="relative self-stretch w-full h-28 bg-[#2e2e2e] border border-[#3a3a3a]"
            >
              <div className="absolute top-11 left-24 [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {wine.name}
              </div>
              <div className="w-[88px] h-28 bg-[#ff383c] absolute top-0 left-0" />
              <div className="top-[84px] left-[302px] absolute [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {wine.price}
              </div>
              <div className="absolute top-2 left-[304px] text-sm tracking-[0] [font-family:'Roboto',Helvetica] font-medium text-white leading-[normal] whitespace-nowrap">
                ⓘ
              </div>
            </div>
          ))}
        </div>
        <h2 className="absolute top-[63px] left-[122px] [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Wein
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
