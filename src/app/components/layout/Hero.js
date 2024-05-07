import React from "react";
import Right from "../Icons/Right";

const Hero = () => {
  return (
    <section className="flex items-center justify-between ">
      <div className="py-12">
        <h1 className="text-4xl font-bold">
          Everything <br></br> is quite better <br></br>with a Dog
        </h1>
        <p className="mt-8 my-8 text-gray-500 font-semibold">
          Dog is always good as we want loremDog is always good as we want lorem
          Dog is always good as we want loremDog is always good as we want lorem
          Dog is always good as we want loremDog is always good as we want lorem
          Dog is always good as we want loremDog is always good as we want lorem
          Dog is always good as we want
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-primary items-center text-white px-6 py-2 rounded-full font-bold flex gap-2 text-sm uppercase">
            Order Now
            <Right></Right>
          </button>
          <button className="flex text-gray-500 font-semibold gap-2">
            Learn more
            <Right></Right>
          </button>
        </div>
      </div>

      <div className="w-full h-max relative">
        <img
          src={"/dogImage/dog2.png"}
          layout={"fill"}
          alt={"Dog"}
          objectFit={"contain"}
        />
      </div>
    </section>
  );
};

export default Hero;
