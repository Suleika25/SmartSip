import { Button } from "../../components/ui/button";

export const Home = (): JSX.Element => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] flex flex-col bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="ml-[15px] w-[72px] h-[72px] mt-4 bg-[#ff383c]" />
        <div className="ml-[15px] w-[328px] h-[220px] mt-[29px] bg-[#ac7f5e]" />
        <p className="ml-[15px] w-[323px] h-4 mt-[29px] [font-family:'Roboto',Helvetica] font-normal text-white text-[13.5px] tracking-[-0.27px] leading-[normal] whitespace-nowrap">
          Über 80 Cocktails · für jeden Geschmack&nbsp;&nbsp;·&nbsp;&nbsp;frisch
          gemixt
        </p>
        <h1 className="ml-[15px] w-[296px] h-7 mt-[58px] [font-family:'Roboto',Helvetica] font-medium text-white text-2xl tracking-[-0.48px] leading-[normal] whitespace-nowrap">
          Finde deinen perfekten Drink
        </h1>
        <p className="ml-3.5 w-[314px] h-9 mt-2 [font-family:'Roboto',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px] leading-[normal]">
          Entdecke unsere komplette Barkarte oder lass dir
          <br />
          von der KI den passenden Cocktail empfehlen.
        </p>
        <Button
          onClick={() => window.location.href = '/menu'}
          className="ml-[15px] w-[328px] h-12 mt-[21px] bg-[#d2167d] hover:bg-[#d2167d]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]"
        >
          Zur Barkarte
        </Button>
        <Button
          onClick={() => window.location.href = '/ai-recommendation'}
          className="ml-4 w-[328px] h-12 mt-[31px] bg-[#d2167d] hover:bg-[#d2167d]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]"
        >
          KI-Cocktailempfehlung
        </Button>
      </section>
    </div>
  );
};
