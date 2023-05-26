/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardRecipeInfo = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const { cooking_method, rating, recipe_name, ingredients } = recipe;

  const toastFavorite = () => {
    toast("Added Item!");
    setFavorite(true);
  };

  return (
    <div>
      <div className="card w-[280px] md:w-[330px] h-[34rem] bg-base-100 relative shadow-xl mb-4 font-mono">
        <div className="card-body">
          <h2 className="card-title text-start font-bold text-2xl text-green-600">
            {recipe_name}
          </h2>
          <div className="text-start font-semibold">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
          <h3 className="text-start mt-2 mb-2">
            <span className="text-lg font-bold">Cooking Method :</span>{" "}
            <span className="font-semibold text-[gray]">{cooking_method}</span>
          </h3>
          <div className="flex items-center justify-start gap-4 pt-5">
            <div>
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly/>
            </div>
            <div className="font-bold">{rating}</div>
          </div>
          <div className="flex justify-start">
            <button
              disabled={favorite}
              onClick={toastFavorite}
              className="btn btn-primary absolute bottom-0 mb-3 w-[70%] block mx-auto"
            >
              <div className="flex mx-auto gap-4 justify-center">
                Favorite <FaHeart className="text-[blue]" />
              </div>
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipeInfo;
