import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menu from '../../../assets/menu/banner3.jpg'
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Restuarent | Menu</title>
      </Helmet>
      <Cover menuImage={menu} title='Our menu'></Cover>
    </div>
  );
};

export default Menu;
