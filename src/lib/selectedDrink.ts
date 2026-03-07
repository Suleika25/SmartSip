const DRINK_KEY = "selectedDrinkName";
const BACK_ROUTE_KEY = "selectedDrinkBackRoute";

export const selectDrink = (name: string, backRoute: string) => {
  localStorage.setItem(DRINK_KEY, name);
  localStorage.setItem(BACK_ROUTE_KEY, backRoute);
};

export const getSelectedDrinkName = () => localStorage.getItem(DRINK_KEY);
export const getSelectedDrinkBackRoute = () => localStorage.getItem(BACK_ROUTE_KEY) || "/cocktails";
