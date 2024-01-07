import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, price, recipe, image, category } = item;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl border-4 border-yellow-500 my-2 hover:scale-105 duration-300">
        <figure>
          <img className="w-full hover:scale-110 duration-300" src={image} alt={category} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <Link className="btn hover:bg-yellow-800 hover:text-yellow-500 bg-yellow-500 text-black font-bold">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
