import useMenu from "./useMenu";

const useCategory = () => {
  const [menu] = useMenu();
  const offer = menu.filter((item) => item.category === "popular");
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  return [offer,salad,dessert,pizza,soup]
};

export default useCategory;