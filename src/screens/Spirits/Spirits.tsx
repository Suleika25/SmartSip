import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export const Spirits = (): JSX.Element => {
  const ginSpirits = [
    { name: "Bombay Saphire", price: "8" },
    { name: "Hendrick's Gin", price: "10" },
    { name: "Tanqueray", price: "12" },
    { name: "Monkey 47", price: "12" },
  ];

  const whiskySpirits = [
    { name: "Jack Daniel's", price: "10" },
    { name: "Jameson Irish Whiskey", price: "12" },
    { name: "Chivas Regal 12", price: "12" },
    { name: "Lagavulin", price: "12" },
  ];

  const rumSpirits = [
    { name: "Havanna Club", price: "12" },
    { name: "La Leyenda", price: "12" },
    { name: "Brugal Extra Viejo", price: "12" },
    { name: "Dipomatico Reserva", price: "12" },
  ];

  const vodkaSpirits = [
    { name: "Absolut Vodka", price: "12" },
    { name: "Grey Goose", price: "12" },
    { name: "Belvedere", price: "12" },
    { name: "Christal Head Vodka", price: "12" },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] relative bg-[#121212] overflow-y-scroll translate-y-[-1rem] animate-fade-in opacity-0 pt-8">
        <div className="flex flex-col w-[328px] items-start gap-4 absolute top-[1250px] left-4">
          <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Rum 4cl
          </h3>
          {rumSpirits.map((spirit, index) => (
            <div
              key={index}
              className="relative self-stretch w-full h-28 bg-[#2e2e2e] border border-[#3a3a3a]"
            >
              <div className="absolute top-11 left-24 [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {spirit.name}
              </div>
              <div className="w-[88px] h-28 bg-[#ff383c] absolute top-0 left-0" />
              <div className="top-[84px] left-[302px] absolute [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {spirit.price}
              </div>
              <div className="absolute top-2 left-[304px] text-sm tracking-[0] [font-family:'Roboto',Helvetica] font-medium text-white leading-[normal] whitespace-nowrap">
                ⓘ
              </div>
            </div>
          ))}
          <div className="flex flex-col w-[328px] items-start gap-4 relative flex-[0_0_auto]">
            <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              Vodka 4cl
            </h3>
            {vodkaSpirits.map((spirit, index) => (
              <div
                key={index}
                className="relative self-stretch w-full h-28 bg-[#2e2e2e] border border-[#3a3a3a]"
              >
                <div className="absolute top-11 left-24 [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  {spirit.name}
                </div>
                <div className="w-[88px] h-28 bg-[#ff383c] absolute top-0 left-0" />
                <div className="top-[84px] left-[302px] absolute [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {spirit.price}
                </div>
                <div className="absolute top-2 left-[304px] text-sm tracking-[0] [font-family:'Roboto',Helvetica] font-medium text-white leading-[normal] whitespace-nowrap">
                  ⓘ
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[328px] items-start gap-4 absolute top-[122px] left-4">
          <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Gin 4cl
          </h3>
          {ginSpirits.map((spirit, index) => (
            <div
              key={index}
              className="relative self-stretch w-full h-28 bg-[#2e2e2e] border border-[#3a3a3a]"
            >
              <div className="absolute top-11 left-24 [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {spirit.name}
              </div>
              <div className="w-[88px] h-28 bg-[#ff383c] absolute top-0 left-0" />
              <div className="top-[84px] left-[302px] absolute [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {spirit.price}
              </div>
              <div className="absolute top-2 left-[304px] text-sm tracking-[0] [font-family:'Roboto',Helvetica] font-medium text-white leading-[normal] whitespace-nowrap">
                ⓘ
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-[328px] items-start gap-4 absolute top-[680px] left-4">
          <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Whisky 4cl
          </h3>
          {whiskySpirits.map((spirit, index) => (
            <div
              key={index}
              className="relative self-stretch w-full h-28 bg-[#2e2e2e] border border-[#3a3a3a]"
            >
              <div className="absolute top-11 left-24 [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {spirit.name}
              </div>
              <div className="w-[88px] h-28 bg-[#ff383c] absolute top-0 left-0" />
              <div className="top-[84px] left-[302px] absolute [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {spirit.price}
              </div>
              <div className="absolute top-2 left-[304px] text-sm tracking-[0] [font-family:'Roboto',Helvetica] font-medium text-white leading-[normal] whitespace-nowrap">
                ⓘ
              </div>
            </div>
          ))}
        </div>
        <h2 className="absolute top-[67px] left-28 [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Spirituosen
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
