import React from "react";
import { Link } from "react-router-dom";

const AlertAuth = () => {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white w-96 p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Oops! You're not logged in.</h3>
        <p className="text-gray-700 mb-4">
          Please login to access this feature.
        </p>
        <div className="flex justify-center items-center">
          <Link to={"/login"}>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md">
              Login
            </button>
          </Link>
          <Link to={"/explore"}>
            <button className="ml-3 font-Poppins font-medium hover:underline text-blue-600">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlertAuth;
