import React from "react";

const OrderDetail = () => {
  return (
    <div className=" justify-center w-full bg-[#fff] px-4 rounded py-5">
      <div className="flex justify-between">
        <div>
          <h2 className="font-medium font-Poppins text-xl">ORDER ID #123REF</h2>
          <p className="text-sm font-Poppins font-light">
            Here you can update your password
          </p>
        </div>
        <button className="bg-gray-800  py-2 px-4 text-white font-Poppins font-semibold">
          BACK
        </button>
      </div>
      <hr className="text-gray-800 my-8" />
      <div className="grid mt-8">
        <p className="font-semibold font-Poppins text-xl">EVENT NAME</p>
        <div className="bg-gray-100 rounded-md px-4 py-6 shadow mt-8 w-full">
          <div className="w-full flex justify-between pb-4">
            <p className="font-medium font-Poppins text-lg">Status :</p>
            <p className="font-semibold font-Poppins text-lg bg-yellow-400 rounded-sm px-4 py-2">
              Pending
            </p>
          </div>
          <div className="w-full flex justify-between">
            <p className="font-medium font-Poppins text-lg">Event Date :</p>
            <p className="font-semibold font-Poppins text-lg ">12,May 2024</p>
          </div>
        </div>
        <div className=" mt-8">
          <h2 className="font-semibold font-Poppins text-lg">ORDER ITEM</h2>
          <ul className="mt-8 px-5">
            <li>
              <span className="font-bold">File 1:</span>
              <a
                href="https://example.com/download/file1"
                className="ml-2 underline text-blue-600"
              >
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
