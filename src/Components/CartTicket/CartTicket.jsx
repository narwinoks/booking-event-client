import React from "react";
import { FaCalendarAlt, FaMoneyBillAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const CartTicket = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-center h-32 mb-4">
        <img
          className="object-cover w-full h-full"
          src={data.image}
          alt={data.name}
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{data.name}</h3>
      <div className="flex items-center mb-2">
        <FaCalendarAlt className="text-gray-600 mr-2" />
        <p className="text-gray-600">{data.date}</p>
      </div>
      <div className="flex items-center mb-2">
        <ImLocation2 className="text-gray-600 mr-2" />
        <p className="text-sm text-gray-500">{data.location}</p>
      </div>
      <div className="mt-4 flex items-center justify-between flex-wrap">
        <div className="flex flex-col">
          <label htmlFor="price" className="text-gray-400">
            Harga mulai
          </label>
          <span className="text-gray-700 font-medium inline-block">
            IDR 50.0000
          </span>
        </div>
        <button className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
          Beli
        </button>
      </div>
    </div>
  );
};

export default CartTicket;
