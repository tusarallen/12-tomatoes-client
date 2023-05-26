/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import Marquee from "react-fast-marquee";
import { FaThumbsUp } from "react-icons/fa";
import CardRecipeInfo from "../components/CardRecipeInfo/CardRecipeInfo";

const Secondary = () => {
  const { id } = useParams();
  const [chef, setChef] = useState("");

  const recipeData = useLoaderData();
  console.log(recipeData);

  useEffect(() => {
    fetch(`https://chef-recipe-server-tusarallen.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  console.log(chef);
  const {
    chefPicture,
    chef_description,
    chefName,
    likes,
    numOfRecipes,
    yearsOfExperience,
  } = chef;

  return (
    <div>
      <NavBar />
      <div className="w-11/12 mx-auto"></div>
      {/* chef-recipe-page-start */}
      <div className="w-10/12 mx-auto font-mono">
        <h2 className="text-center mx-auto font-bold text-3xl mt-5 text-[#1E90FF]">
          Welcome To Chef Recipes page
        </h2>
        <Marquee className="text-lg text-[green] font-semibold mt-3">
          Welcome to the ultimate recipe hub for foodies. Let's explore the
          flavors of the world together!...
        </Marquee>
        <div className="hero set-bgs min-h-screen md:bg-base-200 mt-5">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div>
                <img className="rounded-md" src={chefPicture} alt="" />
              </div>
              <h1 className="text-4xl mt-3 font-bold">{chefName}</h1>
              <p className="my-3">
                <span className="font-bold text-2xl">About chef : </span>{" "}
                <span className="font-semibold text-md text-[green]">
                  {chef_description}
                </span>
              </p>
              <p className="font-bold text-2xl">
                Years of experience: {yearsOfExperience}
              </p>
              <p className="font-bold text-2xl">recipes: {numOfRecipes}</p>
              <div className="text-xl flex items-center mb-4 ml-32 md:ms-[170px] mt-4">
                <FaThumbsUp />{" "}
                <div className="badge badge-lg ms-2">{likes}</div>
              </div>
              <h2 className="py-6 font-bold text-3xl text-[red]">
                Shef's Recipies
              </h2>
              <div className="md:flex md:flex-row flex-col mx-auto md:-ml-[283px] ml-4 md:gap-3 mb-5">
                {recipeData.map((recipe) => (
                  <CardRecipeInfo key={recipe.recipe_name} recipe={recipe} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* chef-recipe-page-end */}
      <Footer />
    </div>
  );
};

export default Secondary;
