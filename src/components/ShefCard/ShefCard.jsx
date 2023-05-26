/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const ShefCard = ({ ShefCardData }) => {
  console.log(ShefCardData);
  const {
    chefPicture,
    chefName,
    yearsOfExperience,
    numOfRecipes,
    likes,
    recipe_id,
  } = ShefCardData;

  return (
    <div>
      <div>
        <div className="card card-compact h-[30rem] mx-auto mt-5 md:mt-0 bg-base-100 shadow-xl font-mono">
          <figure>
            <LazyLoad height={200}>
              <img src={chefPicture} alt="Shoes" />
            </LazyLoad>
          </figure>
          <div className="card-body">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">{chefName}</h2>
              <div className="badge badge-warning gap-2">Experts</div>
            </div>
            <p className="text-xl font-semibold">
              Years of experience: {yearsOfExperience}
            </p>
            <p className="text-xl font-semibold">recipes: {numOfRecipes}</p>
            <div className="text-xl flex items-center cursor-pointer">
              <FaThumbsUp />{" "}
              <div className="badge badge-lg ms-2">{likes}</div>
            </div>
            <div className="card-actions justify-center mt-8">
              <Link to={`/recipe/${recipe_id}`}>
                <button className="btn btn-success hover:bg-emerald-500 hover:text-white">
                  View Recipes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShefCard;
