import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImage }) => {
  return (
    <div className="my-24">
      {title && <Cover menuImage={coverImage} title={title}></Cover>}
      <div className="grid gap-10 grid-cols-2 mt-24">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
