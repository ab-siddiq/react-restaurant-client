import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, price, recipe, image, category } = item;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl border-4 border-yellow-500 my-2 hover:scale-105 duration-300 relative">
        <figure>
          <img className="w-full hover:scale-110 duration-300" src={image} alt={category} />
        </figure>
        <p className="absolute right-3 top-3 bg-black px-2 py-1 rounded-lg text-white">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <Link className="btn hover:bg-yellow-300 hover:text-black hover:outline hover:outline-2 hover:outline-yellow-600 bg-yellow-500 text-black font-bold">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
