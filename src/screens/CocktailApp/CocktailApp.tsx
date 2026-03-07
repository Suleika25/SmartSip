import { ChevronLeftIcon } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const CocktailApp = (): JSX.Element => {
  const menuCategories = [
    { name: "Cocktails", gradient: true },
    { name: "Spirituosen", gradient: true },
    { name: "Bier", gradient: false },
    { name: "Wein", gradient: true },
    { name: "Softgetränke", gradient: true },
    { name: "Heissgetränke", gradient: true },
  ];

  const filterTags = [
    ["süss", "sauer"],
    ["fruchtig", "cremig"],
    ["bitter", "scharf"],
    ["herb"],
    ["alkoholfrei", "alkoholisch"],
  ];

  const aperoSpritzDrinks = [
    {
      name: "Aperol Spritz",
      ingredients: "Aperol. Prosecco, Soda",
      price: "12",
    },
    {
      name: "Aperol Spicy Ginger",
      ingredients: "Aperol. Gingerbeer, Soda",
      price: "12",
    },
    {
      name: "Limoncello Spritz",
      ingredients: "Limoncello. Prosecco, Soda",
      price: "12",
    },
    { name: "Sarti Spritz", ingredients: "Sarti Prosecco, Soda", price: "12" },
    {
      name: "Hugo",
      ingredients: "Prosecco, Holunderblütensirup, \nSodawasser, Minze",
      price: "12",
    },
    { name: "Lillet Tonic", ingredients: "Lillet, Tonic Water", price: "12" },
    { name: "Vermouth Tonic", ingredients: "Lillet, Tonic Water", price: "12" },
    {
      name: "Americano",
      ingredients: "Campari, Sweet Vermouth, \nTonic Water",
      price: "12",
    },
  ];

  const soursDrinks = [
    {
      name: "Amaretto Sour",
      ingredients: "Amaretto, Zitronensaft, Eiweiss, \nAngostura Bitter",
      price: "16",
    },
    {
      name: "Whisky Sour",
      ingredients: "Bourbon Whisky, Zitronensaft, \nEiweiss, Zuckersirup",
      price: "16",
    },
    {
      name: "Pizsco Sour",
      ingredients: "Pizsco, Zitronensaft, Eiweiss,\nZuckersirup",
      price: "16",
    },
  ];

  const classicCocktails = [
    {
      name: "Singapore Sling",
      ingredients:
        "Gin, Cherry Brandy, Cointreau, \nBenedictine, Ananassaft, Limetten-\nsaft. Grenadine, Bitters",
      price: "16",
    },
    {
      name: "Old Fashioned",
      ingredients: "Whisky, Angostura Bitter, Zucker, \nSoda, Orangenzeste",
      price: "12",
    },
    {
      name: "Grasshopper",
      ingredients: "Crème de Menthe, Crème de Cacao,\nRahm",
      price: "16",
    },
    {
      name: "Boulevardier",
      ingredients: "Bourbon, Campari, Sweet Vermouth",
      price: "16",
    },
    {
      name: "Mai Tai",
      ingredients:
        "Weisser Rum, Brauner Rum, Curacao\nOrgeat, Limettensaft, Zuckersirup",
      price: "16",
    },
    {
      name: "Piña Colada",
      ingredients: "Weisser Rum, Ananassaft, \nKokoscreme, Rahm",
      price: "16",
    },
    {
      name: "Cosmopolitan",
      ingredients: "Wodka, Triple Sec, Cranberrysaft\nLimettensaft",
      price: "16",
    },
    {
      name: "Long Island Ice Tea",
      ingredients:
        "Wodka, Gin, Weisser Rum, Tequilla\nTriple Sec, Zitronensaft, Zuckersirup\nOrangensaft, Cola",
      price: "16",
    },
    { name: "White Russian", ingredients: "Vodka, Khalua, Rahm", price: "16" },
    {
      name: "Alexander",
      ingredients: "Cognac, Creme de Cacao, Sahne",
      price: "16",
    },
    {
      name: "Daiquiri",
      ingredients: "Weisser Rum, Limettensaft,\nZuckersirup",
      price: "16",
    },
    {
      name: "Margherita",
      ingredients: "Tequila, Triple Sec, Lime Juice,\nSalzrand",
      price: "16",
    },
    {
      name: "Negroni",
      ingredients: "Gin, Campari, Sweet Vermouth",
      price: "16",
    },
    {
      name: "Dry Martini",
      ingredients: "Gin, Campari, Sweet Vermouth",
      price: "16",
    },
    {
      name: "Espresso Martini",
      ingredients: "Vodka, Khalua, Espresso,\nZuckersirup",
      price: "16",
    },
    {
      name: "Manhattan",
      ingredients: "Whisky, Dry Vermouth, Angostura\nBitter",
      price: "16",
    },
    {
      name: "Hanky Panky",
      ingredients: "Gin, Sweet Vermouth, Fernet Branca",
      price: "16",
    },
    {
      name: "Bijou",
      ingredients: "Gin, Green Cartreuse,\nSweet Vermouth, Orange Bitter",
      price: "16",
    },
    {
      name: "Martinez",
      ingredients: "Gin, Vermouth Rosso, Maraschino",
      price: "16",
    },
  ];

  const modernClassics = [
    {
      name: "Bramble",
      ingredients: "Gin, Zitrone, Zuckersirup, \nCrème de Mûre",
      price: "16",
    },
    {
      name: "Paper Plane",
      ingredients: "Bourbon, Aperol, Amaro Nonino, \nZitronensaft",
      price: "16",
    },
    {
      name: "Army & Navy",
      ingredients: "Gin, Orgeat, Zitronensaft, Angostura\nBitter",
      price: "16",
    },
    {
      name: "Pencilin",
      ingredients:
        "Blended Scotch Whisky, Zitronensaft\nHonig-Ingwer Sirup, Islay Whisky",
      price: "16",
    },
    {
      name: "Dark & Stormy",
      ingredients: "Rum, Zitronensaft, Spicy Ginger Beer",
      price: "16",
    },
    {
      name: "Clover Club",
      ingredients: "Gin, Zitrone, Himbeersirup, Eiweiss",
      price: "16",
    },
    {
      name: "Naked & Famous",
      ingredients: "Mezcal, Aperol, Cartreuse Jaune,\nLime Juice",
      price: "16",
    },
    {
      name: "Pornstar Martini",
      ingredients:
        "Vanilla Vodka, Passionsfruchtpüree,\nLimettensaft, Prosecco Shot",
      price: "16",
    },
    {
      name: "Aviation",
      ingredients: "Gin, Maraschino, Zitronensaft, \nCreme de Violette",
      price: "16",
    },
    {
      name: "Last Word",
      ingredients: "Gin, Green Chartreuse, MAraschino, \nLime",
      price: "16",
    },
    {
      name: "French 75",
      ingredients: "Gin, Prosecco, Zitronensaft, \nZuckersirup",
      price: "16",
    },
    {
      name: "East 8 Hold Up",
      ingredients: "Vodka, Aperol, Ananassaft, Limette,\nPassionsfruchtsaft",
      price: "16",
    },
    {
      name: "Jungle Bird",
      ingredients: "Rum, Campari, Ananassaft, Lime",
      price: "16",
    },
    {
      name: "Oax Old Fashioned",
      ingredients: "Reposada Tequila, Mezcal, \nAgavensirup, Angostura Bitter",
      price: "16",
    },
    {
      name: "Picante de la Casa",
      ingredients: "Tequila, Lime, Agave, Koriander, Chili",
      price: "16",
    },
    {
      name: "Elderflower Collins",
      ingredients: "Gin, Holunderblütensirup,\nLimettensaft, Soda",
      price: "16",
    },
    {
      name: "Bone Dry Martini",
      ingredients: "London Dry Gin, Extra Dry Vermouth,\nSoda",
      price: "16",
    },
    {
      name: "Gin Basil Smash",
      ingredients: "Gin, frischer Basilikum, Zitronensaft\nZucker",
      price: "16",
    },
    { name: "Vesper Martini", ingredients: "Gin, Vodka, Lillet", price: "16" },
    {
      name: "Toronto",
      ingredients: "Rye Whisky, Fernet Branca, Zucker",
      price: "16",
    },
    {
      name: "Black Manhattan",
      ingredients: "Whisky, Amaro, Angostura Bitter",
      price: "16",
    },
    {
      name: "Spizy Mezcalita",
      ingredients: "Mezcal, Lime, Chili, Agave",
      price: "16",
    },
  ];

  const signatureDrinks = [
    {
      name: "Japanese Spring",
      ingredients: "Roku Gin, Zitronengras, \nLycheepuree, Zitronensaft",
      price: "10",
    },
    {
      name: "Paraiso Tropical",
      ingredients: "White Peach, Lycheepuree,\nPassionsfruchtsaft, Ananassaft",
      price: "10",
    },
    {
      name: "Red Hot Chili Pepper",
      ingredients:
        "Tequila, Triple Sec, Passionsfrucht-\nsirup, Zitronensaft, Tabasco",
      price: "10",
    },
    {
      name: "Sovjet Sip",
      ingredients: "Buckwheat Vodka, White Chocolate\nLiqueur Cream",
      price: "10",
    },
    {
      name: "Lemon Meringue",
      ingredients:
        "Malfy Gin, Zitrone, Limoncello,\nLiqueur 43, Zitronensaft, Zucker, \nEiweiss, Vanille Extrakt",
      price: "10",
    },
    {
      name: "Rosmary Mate",
      ingredients: "Gin, Rosmarinsirup, Limettensaft,\nMate Soda, Zimtstange",
      price: "10",
    },
    {
      name: "Mate Mint Mule",
      ingredients:
        "Vodka, Honigsirup, Limettensaft, \nfrische Minze, Mate Soda",
      price: "10",
    },
    {
      name: "Fiery Mango Daiquiri",
      ingredients:
        "Weisser Rum, Mangopüree, \nLimettensaft, Zuckersirup, Chili",
      price: "10",
    },
    {
      name: "Butterscotch Russian",
      ingredients: "Butterscotch Liqueur, Vodka, Khalua,\nRahm",
      price: "10",
    },
    {
      name: "Smoked Butterscotch",
      ingredients: "Blended Scotch, Butterscotch\nLiqueur, Islay Whisky",
      price: "10",
    },
    {
      name: "Hatano",
      ingredients:
        "Roku Gin, Pink Grapefruit Soda, \nFrischer Ingwer, Frischer Rosmarin\nMuskatnuss",
      price: "10",
    },
    {
      name: "Maracuja Sour",
      ingredients:
        "Pisco, Passionsfruchtsaft, Limetten-\nsaft, Eiweiss, Zuckersirup, \nAngostura Bitter",
      price: "10",
    },
    {
      name: "Maracuja Sour",
      ingredients:
        "Pisco, Passionsfruchtsaft, Limetten-\nsaft, Eiweiss, Zuckersirup, \nAngostura Bitter",
      price: "10",
    },
  ];

  const mocktails = [
    {
      name: "Tropical Thunder",
      ingredients:
        "Mango Püree, Passionsfrucht Saft, \nCranberry Saft, Lemon Saft, \nVanille Sirup",
      price: "10",
    },
    {
      name: "Golden Nugget",
      ingredients: "Zitronensaft, Maracujasaft,\nRose Lime, Soda",
      price: "10",
    },
    {
      name: "Virgin Mojito",
      ingredients:
        "Ginger Ale, Limettensaft, Zucker,\nMojito Sirup, Soda, Minze",
      price: "10",
    },
    {
      name: "Virgin Gin Tonic",
      ingredients: "Alkoholfreier Gin, Tonic Water",
      price: "10",
    },
    {
      name: "Berry Fizz",
      ingredients: "Cranberry Saft, Himbeerpüree, \nZitronensaft, Soda",
      price: "10",
    },
    {
      name: "Citrus Highball",
      ingredients: "Zitronensaft, Limettensaft, \nZuckersirup, Soda",
      price: "16",
    },
    {
      name: "Garden Spritz",
      ingredients: "Gurkensaft, Limettensaft, \nZuckersirup, Soda, Basilikum",
      price: "10",
    },
    {
      name: "Bitter Spritz",
      ingredients: "Sanbitter, Soda, Orangenscheibe",
      price: "10",
    },
    {
      name: "Virgin Smoky Paloma",
      ingredients:
        "Pink Grapefruit Saft, Limettensaft, \nAgavensirup, geräuchertes Salz",
      price: "10",
    },
    {
      name: "Virgin Colada",
      ingredients: "Ananassaft, Kokoscreme, Rahm",
      price: "10",
    },
    {
      name: "Virgin Cucumber Tonic",
      ingredients: "Gurkensaft, Tonic Water, Salz",
      price: "10",
    },
    {
      name: "Lavendel Lemonade",
      ingredients: "Zitronensaft, Lavendelsirup, \nZuckersirup, Soda",
      price: "10",
    },
    {
      name: "Dry Grapefruit Spritz",
      ingredients: "Grapefruitsaft, Sodawasser, Salz",
      price: "10",
    },
  ];

  const beerBottles = [
    { name: "Feldschlösschen", price: "6" },
    { name: "Heineken", price: "6" },
    { name: "Schneider Weisse", price: "6" },
    { name: "Corona", price: "6" },
    { name: "Präsidente", price: "6" },
  ];

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

  const hotDrinks = [
    {
      name: "Irish Coffee",
      ingredients: "Heisser Kaffee, Whiskey,  Zucker\nSchlagrahm",
      price: "9",
    },
    {
      name: "Baileys Coffee",
      ingredients: "Kaffee, Baileys, Schlagrahm",
      price: "9",
    },
    {
      name: "Spanish Coffee",
      ingredients: "Kaffee, Triple Sec und Rum",
      price: "8",
    },
    {
      name: "Hot Espresso Martini",
      ingredients: "Espresso, Vodka und Kahlua",
      price: "8",
    },
    {
      name: "Kaffee Lutz",
      ingredients: "Instant Kaffee, Zwetschge, Zucker",
      price: "8",
    },
  ];

  const tasteOptions = [
    "süss",
    "sauer",
    "fruchtig",
    "herb",
    "frisch",
    "cremig",
    "bitter",
    "scharf",
  ];

  const recommendedDrinks = [
    {
      name: "Aperol Spritz",
      ingredients: "Aperol. Prosecco, Soda",
      price: "12",
    },
    {
      name: "Aperol Spritz",
      ingredients: "Aperol. Prosecco, Soda",
      price: "12",
    },
    {
      name: "Aperol Spritz",
      ingredients: "Aperol. Prosecco, Soda",
      price: "12",
    },
  ];

  const CocktailCard = ({
    name,
    ingredients,
    price,
  }: { name: string; ingredients: string; price: string }) => (
    <div className="relative h-28 bg-[#2e2e2e] border border-[#3a3a3a]">
      <div className="absolute top-[46px] left-24 [font-family:'Roboto',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
        {ingredients}
      </div>
      <div className="absolute top-[9px] left-24 [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
        {name}
      </div>
      <div className="w-[88px] h-28 bg-[#ff383c] absolute top-0 left-0" />
      <div className="absolute top-20 left-[296px] [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
        {price}
      </div>
      <div className="absolute top-[9px] left-[301px] text-sm tracking-[0] [font-family:'Roboto',Helvetica] font-medium text-white leading-[normal] whitespace-nowrap">
        ⓘ
      </div>
    </div>
  );

  return (
    <div
      className="bg-white w-full min-w-[5310px] min-h-[10923px] flex relative"
      data-model-id="98:1049"
    >
      <section className="mt-[243px] w-[360px] h-[800px] ml-[101px] flex flex-col bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0">
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
        <Button className="ml-[15px] w-[328px] h-12 mt-[21px] bg-[#d2167d] hover:bg-[#d2167d]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
          Zur Barkarte
        </Button>
        <Button className="ml-4 w-[328px] h-12 mt-[31px] bg-[#d2167d] hover:bg-[#d2167d]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
          KI-Cocktailempfehlung
        </Button>
      </section>

      <section className="mt-[243px] w-[360px] h-[800px] relative ml-9 bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <nav className="flex flex-col w-[328px] items-start gap-[30px] absolute top-32 left-4">
          {menuCategories.map((category, index) => (
            <Button
              key={index}
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
        <h2 className="absolute top-7 left-[124px] [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Barkarte
        </h2>
        <Button
          variant="ghost"
          className="absolute top-[26px] left-6 w-[30px] h-[35px] p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>

      <section className="mt-[243px] w-[360px] h-[800px] ml-[66px] flex flex-col bg-[#121212] overflow-y-scroll translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <header className="flex ml-6 w-[203px] h-[35px] relative mt-[26px] items-center gap-3 bg-transparent">
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <ChevronLeftIcon className="w-fit text-white text-3xl" />
          </Button>
          <h2 className="[font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
            Cocktails
          </h2>
        </header>

        <div className="flex ml-[3px] w-[311px] h-[118px] relative flex-wrap items-start gap-[-12px_8px]">
          {filterTags.map((tagGroup, groupIndex) => (
            <div
              key={groupIndex}
              className="flex flex-col items-start gap-2.5 p-2.5 relative"
            >
              <div className="flex items-center gap-2 relative">
                {tagGroup.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    className="bg-[linear-gradient(0deg,rgba(108,11,64,1)_0%,rgba(108,11,64,1)_100%),linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)] hover:bg-[linear-gradient(0deg,rgba(108,11,64,1)_0%,rgba(108,11,64,1)_100%),linear-gradient(0deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_100%)] [font-family:'Inter',Helvetica] font-normal text-xs text-white"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex ml-4 h-[10212px] mt-[17px] flex-col items-start gap-10 w-[328px] relative">
          <div className="flex flex-col w-[328px] items-start gap-3 relative flex-[0_0_auto]">
            <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-[normal] whitespace-nowrap">
              APERO & SPRITZ
            </h3>
            {aperoSpritzDrinks.map((drink, index) => (
              <CocktailCard key={index} {...drink} />
            ))}
          </div>

          <div className="inline-flex relative flex-[0_0_auto] flex-col items-start gap-4">
            <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
              SOUR´S
            </h3>
            {soursDrinks.map((drink, index) => (
              <CocktailCard key={index} {...drink} />
            ))}
          </div>

          <div className="inline-flex relative flex-[0_0_auto] flex-col items-start gap-4">
            <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
              CLASSIC COCKTAILS
            </h3>
            {classicCocktails.map((drink, index) => (
              <CocktailCard key={index} {...drink} />
            ))}
          </div>

          <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
            <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              MODERN CLASSICS
            </h3>
            {modernClassics.map((drink, index) => (
              <CocktailCard key={index} {...drink} />
            ))}
          </div>

          <div className="inline-flex relative flex-[0_0_auto] flex-col items-start gap-4">
            <div className="[font-family:'Roboto',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
              <span className="font-bold">Signature Drinks </span>
              <span className="font-medium">Eigenkreationen des Hauses</span>
            </div>
            {signatureDrinks.map((drink, index) => (
              <CocktailCard key={index} {...drink} />
            ))}
          </div>

          <div className="inline-flex relative flex-[0_0_auto] flex-col items-start gap-4">
            <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
              Mocktails
            </h3>
            {mocktails.map((drink, index) => (
              <CocktailCard key={index} {...drink} />
            ))}
          </div>
        </div>

        <div className="ml-[17px] w-[164px] h-12 mt-[30px] font-normal text-sm [font-family:'Roboto',Helvetica] text-white tracking-[0] leading-[normal]">
          Unsicher bei der Auswahl?
          <br />
          <br />
          Lass dich beraten!
        </div>
        <Button className="ml-4 w-[329px] h-12 mt-[7px] bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
          KI-Cocktailempfehlung
        </Button>
      </section>

      <section className="flex mt-[243px] w-[360px] h-[800px] relative ml-11 flex-col items-start gap-4 pt-6 pb-8 px-4 bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <Button variant="ghost" className="p-0 hover:bg-transparent">
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
        <h2 className="absolute top-6 left-24 [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Cocktail Detail
        </h2>
        <Card className="flex flex-col w-[306px] h-[378px] items-start gap-4 p-5 absolute top-[170px] left-[22px] bg-[#3a3a3a] rounded-2xl shadow-[0px_4px_4px_#00000040] border-0">
          <CardContent className="p-0 w-full">
            <h3 className="rotate-[0.78deg] [font-family:'Roboto',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
              Japanese Spring
            </h3>
            <p className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap mt-4">
              SIGNATURE COCKTAILS
            </p>
            <p className="w-[285px] [font-family:'Roboto',Helvetica] font-light text-[#dbdbdb] text-lg tracking-[0.90px] leading-[normal] mt-[50px]">
              Ein leichter und floraler Cocktail mit Roku Gin, verfeinert durch
              Lychee und frisches Zitronengras.
              <br />
              <br />
              Perfekt als eleganter Start in den Abend.
            </p>
            <div className="flex gap-2 mt-[58px]">
              <Badge className="bg-[#6c0b40] hover:bg-[#6c0b40] border border-[#2a2a2a] [font-family:'Roboto',Helvetica] font-normal text-sm text-white">
                fruchtig
              </Badge>
              <Badge className="bg-[#6c0b40] hover:bg-[#6c0b40] border border-[#2a2a2a] [font-family:'Roboto',Helvetica] font-normal text-sm text-white">
                frisch
              </Badge>
              <Badge className="bg-[#6c0b40] hover:bg-[#6c0b40] border border-[#2a2a2a] [font-family:'Roboto',Helvetica] font-normal text-sm text-white">
                floral
              </Badge>
            </div>
          </CardContent>
        </Card>
        <div className="absolute top-[659px] left-4 w-[337px] font-medium text-base [font-family:'Roboto',Helvetica] text-white tracking-[0] leading-[normal]">
          Unsicher bei der Auswahl?
          <br />
          <br />
          Lass dich beraten!
        </div>
        <Button className="absolute top-[728px] left-[15px] w-[329px] h-12 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
          KI-Cocktailempfehlung
        </Button>
      </section>

      <section className="mt-[243px] w-[360px] h-[800px] relative ml-[88px] bg-[#121212] overflow-y-scroll translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="flex w-[328px] absolute top-[136px] left-4 flex-col items-start gap-4">
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
        <h2 className="absolute top-[31px] left-[122px] [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Bier
        </h2>
        <Button
          variant="ghost"
          className="absolute top-[26px] left-6 p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>

      <section className="mt-[243px] w-[360px] h-[800px] relative ml-[66px] bg-[#121212] overflow-y-scroll translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="inline-flex flex-col items-start gap-4 absolute top-[673px] left-4">
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
        <div className="flex flex-col w-[328px] items-start gap-4 absolute top-28 left-4">
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
        <h2 className="absolute top-[31px] left-[122px] [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Wein
        </h2>
        <Button
          variant="ghost"
          className="absolute top-[26px] left-6 p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>

      <section className="mt-[243px] w-[360px] h-[800px] relative ml-[66px] bg-[#121212] overflow-y-scroll translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <div className="flex flex-col w-[328px] items-start gap-4 absolute top-[1218px] left-4">
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
        <div className="flex flex-col w-[328px] items-start gap-4 absolute top-[90px] left-4">
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
        <div className="flex flex-col w-[328px] items-start gap-4 absolute top-[648px] left-4">
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
        <h2 className="absolute top-[35px] left-28 [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Spirituosen
        </h2>
        <Button
          variant="ghost"
          className="absolute top-[26px] left-6 p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>

      <section className="mt-[243px] w-[360px] h-[800px] relative ml-[66px] bg-[#121212] overflow-y-scroll translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <div className="flex flex-col w-[328px] items-start gap-4 absolute top-24 left-4">
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
        <h2 className="absolute top-[37px] left-[104px] [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Softgetränke
        </h2>
        <Button
          variant="ghost"
          className="absolute top-[26px] left-6 p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>

      <section className="mt-[243px] w-[360px] h-[800px] relative ml-[66px] bg-[#121212] overflow-y-scroll translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <div className="flex w-[328px] absolute top-[136px] left-4 flex-col items-start gap-4">
          {hotDrinks.map((drink, index) => (
            <div
              key={index}
              className="relative self-stretch w-full h-28 bg-[#2e2e2e] border border-[#3a3a3a]"
            >
              <div className="absolute top-[29px] left-[98px] [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {drink.name}
              </div>
              <div className="w-[88px] h-28 bg-[#ff383c] absolute top-0 left-0" />
              <div className="absolute top-[11px] left-[304px] text-sm tracking-[0] [font-family:'Roboto',Helvetica] font-medium text-white leading-[normal] whitespace-nowrap">
                ⓘ
              </div>
              <div className="absolute top-[61px] left-[98px] [font-family:'Roboto',Helvetica] font-extralight text-white text-sm tracking-[0] leading-[normal]">
                {drink.ingredients}
              </div>
              <div className="top-[85px] left-[305px] absolute [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {drink.price}
              </div>
            </div>
          ))}
        </div>
        <h2 className="absolute top-[31px] left-[101px] [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          Heissgetränke
        </h2>
        <Button
          variant="ghost"
          className="absolute top-[26px] left-6 p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>

      <section className="mt-[243px] w-[360px] h-[800px] relative ml-[66px] bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
        <Button className="absolute top-[728px] left-[15px] w-[329px] h-12 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
          Weiter
        </Button>
        <div className="flex flex-col w-[322px] items-start gap-4 absolute top-[135px] left-4">
          {tasteOptions.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-80 h-10 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-lg text-white justify-start pl-[38px] h-auto"
            >
              {option}
            </Button>
          ))}
        </div>
        <h3 className="absolute top-24 left-4 [font-family:'Roboto',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          Auf was hast du heute Lust?
        </h3>
        <h2 className="absolute top-[31px] left-16 [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          KI-Cocktailempfehlung
        </h2>
        <Button
          variant="ghost"
          className="absolute top-[26px] left-[18px] p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>

      <section className="mt-[243px] w-[360px] h-[800px] relative ml-10 bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms]">
        <Button className="absolute top-[728px] left-[15px] w-[329px] h-12 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
          Weiter
        </Button>
        <div className="w-[322px] gap-[19px] top-24 left-4 flex flex-col items-start absolute">
          <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Mit oder ohne Alkohol?
          </h3>
          <Button
            variant="outline"
            className="w-80 h-10 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-white text-lg justify-start pl-[38px] h-auto"
          >
            mit
          </Button>
          <Button
            variant="outline"
            className="w-80 h-10 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-white text-lg justify-start pl-9 h-auto"
          >
            ohne
          </Button>
        </div>
        <div className="w-80 gap-3 top-[328px] left-4 flex flex-col items-start absolute">
          <h3 className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Wie stark darf es sein?
          </h3>
          <Button
            variant="outline"
            className="w-full h-10 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-white text-lg justify-start pl-[38px] h-auto"
          >
            leicht
          </Button>
          <Button
            variant="outline"
            className="w-full h-10 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-white text-lg justify-start pl-[33px] h-auto"
          >
            mittel
          </Button>
          <Button
            variant="outline"
            className="w-full h-10 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 rounded-2xl border-0 [font-family:'Roboto',Helvetica] font-medium text-white text-lg justify-start pl-[33px] h-auto"
          >
            heroisch
          </Button>
        </div>
        <Button
          variant="ghost"
          className="absolute top-[26px] left-[18px] p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
        <h2 className="absolute top-[31px] left-16 [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          KI-Cocktailempfehlung
        </h2>
      </section>

      <section className="mt-[243px] w-[360px] h-[800px] relative ml-10 bg-[#121212] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms]">
        <Button className="absolute top-[728px] left-[15px] w-[329px] h-12 bg-[#2e2e2e] hover:bg-[#2e2e2e]/90 h-auto [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
          Neue Empfehlung
        </Button>
        <div className="w-[328px] gap-4 top-[168px] left-[18px] flex flex-col items-start absolute">
          {recommendedDrinks.map((drink, index) => (
            <CocktailCard key={index} {...drink} />
          ))}
        </div>
        <h3 className="absolute top-[111px] left-6 [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
          Das empfehlen wir dir heute:
        </h3>
        <h2 className="absolute top-[31px] left-16 [font-family:'Roboto',Helvetica] font-medium text-white text-[26px] tracking-[-0.52px] leading-[normal] whitespace-nowrap">
          KI-Cocktailempfehlung
        </h2>
        <Button
          variant="ghost"
          className="absolute top-[26px] left-[18px] p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-[30px] h-[35px] text-white" />
        </Button>
      </section>
    </div>
  );
};
