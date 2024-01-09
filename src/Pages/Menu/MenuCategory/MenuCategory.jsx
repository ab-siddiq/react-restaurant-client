import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImage }) => {
  return (
    <div className="my-24">
      {title && <Cover coverImage={coverImage} title={title}></Cover>}
      <div className="grid gap-10 grid-cols-2 mt-24">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link to={`/order/${title}`}>
          <button className="btn hover:bg-yellow-300 hover:text-black hover:outline hover:outline-2 hover:outline-yellow-600 bg-yellow-500 text-black font-bold">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
