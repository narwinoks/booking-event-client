import React from "react";
import { Link } from "react-router-dom";

const CardDetailTicket = ({ data, slug }) => {
  return (
    <Link to={`/order/${slug}/package?${data.id}`}>
      <div className="mb-12 mt-2 flex">
        <div className="w-full rounded-md bg-white px-12 py-12 shadow-md">
          <h1 className="mb-5 font-medium">{data.name}</h1>
          <hr />
          <div className="mt-5 flex justify-between">
            <p className="font-semibold text-red-400">
              IDR {parseFloat(data.price).toLocaleString("id-ID")}
            </p>
            <button className="rounded bg-blue-500 px-12 py-3 font-medium text-white hover:bg-blue-800">
              Pilih Paket
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardDetailTicket;
