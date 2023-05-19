import React, { useEffect } from "react";
import CartTicket from "../Components/CartTicket/CartTicket";
import Hero from "../Components/Hero/Hero";
import Main from "../Layouts/Main";
import { recommendation } from "../Assets/data/static";
const HomePage = () => {
  return (
    <Main activeNavbar={1}>
      <Hero></Hero>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-Poppins font-bold">
          Event Recommendations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7">
          {recommendation.map((data, index) => {
            return (
              <CartTicket
                data={data}
                key={index}
                name="Event A"
                date="Sabtu, 1 Januari 2022"
                location="Jakarta"
                imageUrl="https://via.placeholder.com/400x300"
              ></CartTicket>
            );
          })}
        </div>
        <div className="flex mt-[20px] justify-center">
          <button className="border-2 py-2 px-6 bg-transparent border-gray-800 rounded-md text-gray-800 hover:bg-gray-800 hover:text-white">
            Explore
          </button>
        </div>
      </div>
    </Main>
  );
};

export default HomePage;
