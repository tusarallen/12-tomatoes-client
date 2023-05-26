/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import shef from "/public//cheficon.png";
import facebook from "/public/Facebook_icon.svg.png";
import twitter from "/public/twitter.png";
import instagram from "/public/insta.png";
import ShefCard from "../ShefCard/ShefCard";
import { useLoaderData } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero";

const Banner = () => {
  const cardData = useLoaderData();
  console.log(cardData);

  return (
    <>
    <div className="w-11/12 mx-auto">
      <div className="set-bg rounded-md pt-24 pl-8 mb-6">
        <div>
          <h2 className="text-5xl text-[#161514] md:text-black font-extrabold md:font-bold font-mono">
            Making Food <br /> great{" "}
            <span className="text-[red] md:text-orange-400">
              again and again
            </span>
          </h2>
          <div className="mt-5 md:text-black text-black font-mono font-semibold w-[70%]">
            Blessesd souls are those who get to enjoy three meals everyday...{" "}
            <br /> Let us always thank God for blessing us with food.A ver Happy{" "}
            <br /> World Food Day to you...
          </div>
          <div className="md:flex md:flex-row hidden">
            <img className="w-[80px] mt-5" src={shef} alt="" />
            <img
              className="w-[44px] h-12 mt-16 ms-20 cursor-pointer"
              src={facebook}
              alt=""
            />
            <img
              className="w-[50px] h-12 mt-16 ms-2 cursor-pointer"
              src={twitter}
              alt=""
            />
            <img
              className="w-[60px] h-16 mt-[55px] ms-2 cursor-pointer"
              src={instagram}
              alt=""
            />
          </div>
        </div>
      </div>
      <h2 className="text-center font-bold text-5xl mt-10 mb-2">Our Chef...</h2>
      <hr className="w-64 mb-7 text-[green] h-2 bg-[#1E99FF] mx-auto rounded"/>
      <div className="md:grid md:grid-cols-3 gap-6">
        {cardData.map((ShefCardData) => (
          <ShefCard key={ShefCardData.id} ShefCardData={ShefCardData} />
        ))}
      </div>
    </div>
    <Hero />
    <Carousel />
    </>
  );
};

export default Banner;
