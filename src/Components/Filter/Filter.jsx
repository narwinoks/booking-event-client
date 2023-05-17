import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const Filter = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="flex bg-gray-50 shadow-md h-[65vh] px-2 rounded-xl">
      <div className="w-64 p-4">
        <h2 className="text-lg font-medium mb-4">Filter By:</h2>
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-700 block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <h4 className="text-gray-600 font-medium mb-2">Location</h4>
          <div className="px-2 mb-1">
            <label htmlFor="jakarta" className="inline-flex items-center">
              <input
                type="checkbox"
                name="location"
                id="jakarta"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Jakarta</span>
            </label>
          </div>
          <div className="px-2 mb-1">
            <label htmlFor="bandung" className="inline-flex items-center">
              <input
                type="checkbox"
                name="location"
                id="bandung"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Bandung</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="text-gray-700 block mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="text-gray-700 block mb-2">
            Price
          </label>
          <InputRange
            maxValue={1000000}
            minValue={0}
            value={priceRange}
            onChange={handlePriceChange}
          />
          <div className="flex justify-between">
            <span>IDR {priceRange.min}</span>
            <span>IDR {priceRange.max}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
