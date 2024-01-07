import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBG from "../../../assets/menu/banner3.jpg";
import dessertBG from "../../../assets/menu/dessert-bg.jpg";
import pizzaBG from "../../../assets/menu/pizza-bg.jpg";
import saladBG from "../../../assets/menu/salad-bg.jpg";
import soupBG from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useCategory from "../../../hooks/useCategory";
const Menu = () => {
  const [offer, salad, dessert, pizza, soup, drinks, popular] = useCategory();
  return (
    <div>
      <Helmet>
        <title>Restuarent | Menu</title>
      </Helmet>
      <Cover coverImage={menuBG} title="Our menu"></Cover>
      <SectionTitle
        heading={"todays offer"}
        subHeading={"Don't miss"}
      ></SectionTitle>
      <MenuCategory items={offer} coverImage={""} title={""}></MenuCategory>

      <MenuCategory
        items={pizza}
        coverImage={pizzaBG}
        title={"pizza"}
      ></MenuCategory>

      <MenuCategory
        items={salad}
        coverImage={saladBG}
        title={"salad"}
      ></MenuCategory>

      <MenuCategory
        items={dessert}
        coverImage={dessertBG}
        title={"dessert"}
      ></MenuCategory>

      <MenuCategory
        items={soup}
        coverImage={soupBG}
        title={"soup"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
