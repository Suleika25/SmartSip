import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export const Menu = (): JSX.Element => {
  const menuCategories = [
    { name: "Cocktails", gradient: true, path: "/cocktails" },
    { name: "Spirituosen", gradient: true, path: "/spirits" },
    { name: "Bier", gradient: true, path: "/beer" },
    { name: "Wein", gradient: true, path: "/wine" },
    { name: "Softgetränke", gradient: true, path: "/soft-drinks" },
    { name: "Heissgetränke", gradient: true, path: "/hot-drinks" },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] relative bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0 pt-8">
        <nav className="flex flex-col w-[328px] items-start gap-[30px] absolute top-40 left-4">
          {menuCategories.map((category, index) => (
            <Button
              key={index}
              onClick={() => window.location.href = category.path}
              className={`relative self-stretch w-full h-16 shadow-[0px_4px_4px_#00000080] ${
                category.gradient
                  ? "bg-[linear-gradient(90deg,rgba(210,22,125,1)_0%,rgba(108,11,64,1)_100%)]"
                  : "bg-[#f206068c]"
              } hover:opacity-90 h-auto`}
            >
              <span className="[font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                {category.name}
              </span>
            </Button>
          ))}
        </nav>
        <h2 className="absolute top-[60px] left-[124px] [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Barkarte
        </h2>
        <Button
          variant="ghost"
          onClick={() => window.location.href = '/'}
          className="absolute top-[50px] left-6 w-[30px] h-[35px] p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>
    </div>
  );
};
