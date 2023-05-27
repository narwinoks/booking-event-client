import React from "react";

const EditPassword = () => {
  return (
    <div className=" justify-center w-full bg-[#fff] px-4 rounded py-5">
      <div className="grid">
        <h2 className="font-medium font-Poppins text-xl">USER PROFILE</h2>
        <p className="text-sm font-Poppins font-light">
          Here you can update your password
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-8 py-4 justify-center px-8">
        <div>
          <div className="relative h-12 mb-2 mt-8">
            <label
              htmlFor=""
              className="absolute -top-3 left-5 text-sm p-1 bg-slate-50 z-10"
            >
              Old Password
            </label>
            <input
              type="password"
              className="absolute px-4 left-0 top-0 w-[100%] h-[100%] border border-gray-500 rounded focus:outline-none focus:border-indigo-400"
              name="name"
              placeholder="Insert your name"
            />
          </div>
          <div className="relative h-12 mb-2 mt-8">
            <label
              htmlFor=""
              className="absolute -top-3 left-5 text-sm p-1 bg-slate-50 z-10"
            >
              New Password
            </label>
            <input
              type="text"
              className="absolute px-4 left-0 top-0 w-[100%] h-[100%] border border-gray-500 rounded focus:outline-none focus:border-indigo-400"
              name="name"
              placeholder="Insert your name"
            />
          </div>
          <div className="relative h-12 mb-2 mt-8">
            <label
              htmlFor=""
              className="absolute -top-3 left-5 text-sm p-1 bg-slate-50 z-10"
            >
              Confirm Password
            </label>
            <input
              type="text"
              className="absolute px-4 left-0 top-0 w-[100%] h-[100%] border border-gray-500 rounded focus:outline-none focus:border-indigo-400"
              name="name"
              placeholder="Insert your name"
            />
          </div>
          <div className="flex justify-end mt-8">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-md font-Poppins font-semibold">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
