import React, { useEffect, useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../Redux/actions/locationAction";

const Filter = ({
  location,
  setLocation,
  setSearch,
  setDate,
  setMinPrice,
  setMaxPrice,
}) => {
  const { locations } = useSelector((state) => state.locations);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300000 });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);
  const handlePriceChange = (value) => {
    setTimeout(() => {
      setMinPrice(value.min);
      setMaxPrice(value.max);
    }, 2000);
    setPriceRange(value);
  };
  const handlerLocation = (value) => {
    const newLocations = location.split(",").map((loc) => loc.trim());
    if (newLocations.includes(value)) {
      const updatedLocations = newLocations.filter((loc) => loc !== value);
      setLocation(updatedLocations.join(","));
    } else {
      const updatedLocations = [...newLocations, value];
      setLocation(updatedLocations.join(","));
    }
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
            onChange={(e) => setSearch(e.target.value)}
            id="name"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <h4 className="text-gray-600 font-medium mb-2">Location</h4>
          {locations &&
            locations.map((data, index) => {
              return (
                <div className="px-2 mb-1" key={index}>
                  <label
                    htmlFor={data.location}
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      name="location"
                      id={data.location}
                      onChange={() => handlerLocation(data.location)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">{data.location}</span>
                  </label>
                </div>
              );
            })}
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="text-gray-700 block mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="text-gray-700 block mb-2">
            Price
          </label>
          <InputRange
            maxValue={300000}
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
