import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Menu } from "./screens/Menu/Menu";
import { Cocktails } from "./screens/Cocktails/Cocktails";
import { CocktailDetail } from "./screens/CocktailDetail/CocktailDetail";
import { Beer } from "./screens/Beer/Beer";
import { Wine } from "./screens/Wine/Wine";
import { Spirits } from "./screens/Spirits/Spirits";
import { SoftDrinks } from "./screens/SoftDrinks/SoftDrinks";
import { HotDrinks } from "./screens/HotDrinks/HotDrinks";
import { AIRecommendation } from "./screens/AIRecommendation/AIRecommendation";
import { AIRecommendationStep2 } from "./screens/AIRecommendationStep2/AIRecommendationStep2";
import { AIRecommendationResult } from "./screens/AIRecommendationResult/AIRecommendationResult";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktail-detail" element={<CocktailDetail />} />
        <Route path="/beer" element={<Beer />} />
        <Route path="/wine" element={<Wine />} />
        <Route path="/spirits" element={<Spirits />} />
        <Route path="/soft-drinks" element={<SoftDrinks />} />
        <Route path="/hot-drinks" element={<HotDrinks />} />
        <Route path="/ai-recommendation" element={<AIRecommendation />} />
        <Route path="/ai-recommendation-step2" element={<AIRecommendationStep2 />} />
        <Route path="/ai-recommendation-result" element={<AIRecommendationResult />} />
      </Routes>
    </BrowserRouter>
  );
};
