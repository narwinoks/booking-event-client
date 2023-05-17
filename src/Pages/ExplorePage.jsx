import React from "react";
import Filter from "../Components/Filter/Filter";
import Main from "../Layouts/Main";
import OrderByDropdown from "../Components/Elements/OrderVyDropdown";
import { FaUndo } from "react-icons/fa";
import { events } from "../Assets/data/static";
import CartTicket from "../Components/CartTicket/CartTicket";

const ExplorePage = () => {
  return (
    <>
      <Main activeNavbar={2}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 px-4 mb-8">
              <Filter></Filter>
            </div>
            <div className="w-full md:w-3/4 px-4">
              <div className="flex justify-between">
                <button className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none">
                  <FaUndo className="h-5 w-5 mr-2" />
                  Reset
                </button>
                <OrderByDropdown></OrderByDropdown>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7">
                {events.map((event, i) => {
                  return <CartTicket data={event} key={i}></CartTicket>;
                })}
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default ExplorePage;
