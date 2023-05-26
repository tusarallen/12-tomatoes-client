/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen w-11/12 mx-auto mt-8 rounded-md"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold font-mono">Hello there</h1>
          <p className="mb-5 font-mono text-orange">
            When it comes to dining out, a good restaurant meal can be an
            unforgettable experience. Whether you're looking for a fancy night
            out or a casual meal with friends, there are a few things that make
            for truly excellent restaurant food. Firstly, high-quality
            ingredients are key. The best restaurants use fresh, locally-sourced
            produce and meats, and they pay attention to the details that make
            their dishes stand out. They might use a particular spice blend or
            cooking technique that elevates the flavors of the dish, or they
            might incorporate unexpected ingredients that add a unique twist.
            Another important factor is presentation. A good restaurant meal is
            not just about the taste - it's also about the visual appeal.....
          </p>
          <button className="btn btn-primary font-mono">Reed More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
