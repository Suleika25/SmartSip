import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadAIPrefs, saveAIPrefs } from "../../lib/aiPrefs";

export const AIRecommendation = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    const prefs = loadAIPrefs();
    setSelectedOptions(prefs.tastes);
  }, []);

  const tasteOptions = [
    "süss",
    "sauer",
    "fruchtig",
    "herb",
    "frisch",
    "cremig",
    "bitter",
    "scharf",
    "spritzig",
  ];

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(o => o !== option));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] relative bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0 pt-8">
        <Button
          onClick={() => {
            saveAIPrefs({
              ...loadAIPrefs(),
              tastes: selectedOptions,
            });
            navigate("/ai-recommendation-step2");
          }}
          className="absolute top-[728px] left-[15px] w-[329px] h-12 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]"
        >
          Weiter
        </Button>
        <div className="flex flex-col w-[322px] items-start gap-4 absolute top-[167px] left-4">
          {tasteOptions.map((option, index) => {
            const isSelected = selectedOptions.includes(option);
            return (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleOptionClick(option)}
                className={`w-80 h-10 rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-lg text-white justify-start pl-[38px] h-auto ${
                  isSelected 
                    ? 'bg-pink-500 hover:bg-pink-600' 
                    : 'bg-[#2e2e2e] hover:bg-[#2e2e2e]/90'
                }`}
              >
                {option}
              </Button>
            );
          })}
        </div>
        <h3 className="absolute top-[128px] left-4 [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          Auf was hast du heute Lust?
        </h3>
        <h2 className="absolute top-[63px] left-16 [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          KI-Cocktailempfehlung
        </h2>
        <Button
          variant="ghost"
          onClick={() => navigate("/") }
          className="absolute top-[50px] left-[18px] p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>
    </div>
  );
};
