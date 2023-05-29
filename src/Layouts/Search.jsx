import React from "react";
import { Link } from "react-router-dom";

const Search = ({ events }) => {
  return (
    <div className="pb-4 w-full bg-[#fff] overflow-y-scroll  mr-8 top-[40px]  mt-5 absolute z-30 rounded-lg shadow-lg px-5 py-4">
      {events.map((event, i) => {
        return (
          <div className="flex mb-5 justify-start items-center">
            <img
              src={event.thumbnail}
              alt="image-event"
              className="h-[30px] w-[30px] rounded"
            />
            <Link to={`/event/${event.slug}`}>
              <p className="ml-4 font-Poppins text-xl font-medium">
                {event.name}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
