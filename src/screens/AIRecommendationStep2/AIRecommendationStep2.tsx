import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadAIPrefs, saveAIPrefs } from "../../lib/aiPrefs";

export const AIRecommendationStep2 = (): JSX.Element => {
  const navigate = useNavigate();
  const [alcoholChoice, setAlcoholChoice] = useState<"mit" | "ohne" | null>(null);
  const [strengthChoice, setStrengthChoice] = useState<"leicht" | "mittel" | "heroisch" | null>(null);
  useEffect(() => {
    const prefs = loadAIPrefs();
    setAlcoholChoice(prefs.alcoholPref);
    setStrengthChoice(prefs.strengthPref === "egal" ? null : prefs.strengthPref);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#121212]">
      <section className="w-[360px] h-[800px] relative bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0 pt-8">
        <Button
          onClick={() => {
            saveAIPrefs({
              tastes: loadAIPrefs().tastes,
              alcoholPref: alcoholChoice ?? "mit",
              strengthPref: alcoholChoice === "ohne" ? "egal" : strengthChoice ?? "egal",
            });
            navigate("/ai-recommendation-result");
          }}
          className="absolute top-[728px] left-[15px] w-[329px] h-12 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]"
        >
          Weiter
        </Button>
        <div className="w-[322px] gap-[19px] top-[128px] left-4 flex flex-col items-start absolute">
          <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Mit oder ohne Alkohol?
          </h3>
          <Button
            variant="outline"
            onClick={() => setAlcoholChoice('mit')}
            className={`w-80 h-10 ${alcoholChoice === 'mit' ? 'bg-pink-500 hover:bg-pink-600' : 'bg-[#2e2e2e] hover:bg-[#2e2e2e]/90'} rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-white text-lg justify-start pl-[38px] h-auto`}
          >
            mit
          </Button>
          <Button
            variant="outline"
            onClick={() => setAlcoholChoice('ohne')}
            className={`w-80 h-10 ${alcoholChoice === 'ohne' ? 'bg-pink-500 hover:bg-pink-600' : 'bg-[#2e2e2e] hover:bg-[#2e2e2e]/90'} rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-white text-lg justify-start pl-9 h-auto`}
          >
            ohne
          </Button>
        </div>
        {alcoholChoice === 'mit' && (
          <div className="w-80 gap-3 top-[360px] left-4 flex flex-col items-start absolute">
            <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              Wie stark darf es sein?
            </h3>
            <Button
              variant="outline"
              onClick={() => setStrengthChoice('leicht')}
              className={`w-full h-10 ${strengthChoice === 'leicht' ? 'bg-pink-500 hover:bg-pink-600' : 'bg-[#2e2e2e] hover:bg-[#2e2e2e]/90'} rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-white text-lg justify-start pl-[38px] h-auto`}
            >
              leicht
            </Button>
            <Button
              variant="outline"
              onClick={() => setStrengthChoice('mittel')}
              className={`w-full h-10 ${strengthChoice === 'mittel' ? 'bg-pink-500 hover:bg-pink-600' : 'bg-[#2e2e2e] hover:bg-[#2e2e2e]/90'} rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-white text-lg justify-start pl-[33px] h-auto`}
            >
              mittel
            </Button>
            <Button
              variant="outline"
              onClick={() => setStrengthChoice('heroisch')}
              className={`w-full h-10 ${strengthChoice === 'heroisch' ? 'bg-pink-500 hover:bg-pink-600' : 'bg-[#2e2e2e] hover:bg-[#2e2e2e]/90'} rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-white text-lg justify-start pl-[33px] h-auto`}
            >
              heroisch
            </Button>
          </div>
        )}
        <Button
          variant="ghost"
          onClick={() => {
            saveAIPrefs({
              ...loadAIPrefs(),
              alcoholPref: alcoholChoice ?? "mit",
              strengthPref: alcoholChoice === "ohne" ? "egal" : strengthChoice ?? "egal",
            });
            navigate("/ai-recommendation");
          }}
          className="absolute top-[50px] left-[18px] p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
        <h2 className="absolute top-[63px] left-16 [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          KI-Cocktailempfehlung
        </h2>
      </section>
    </div>
  );
};
