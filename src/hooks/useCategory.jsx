import useMenu from "./useMenu";

const useCategory = () => {
  const [menu] = useMenu();
  const offer = menu.filter((item) => item.category === "popular");
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const popular = menu.filter((item) => item.category === "popular");
  const drinks = menu.filter((item) => item.category === "drinks");
  // console.log(salad, "salad");
  const categories = {
    offer: offer,
    salad: salad,
    dessert: dessert,
    pizza: pizza,
    soup: soup,
    drinks: drinks,
    popular: popular,
  };
  // console.log(categories, "cat");
  // return [categories];
  return [offer, salad, dessert, pizza, soup, drinks, popular];
};

export default useCategory;
