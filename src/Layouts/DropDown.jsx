import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosApiInstance from "../utils/axiosApiInstance";

const DropDown = () => {
  const navigate = useNavigate();
  const handlerLogout = async (e) => {
    try {
      const data = await axiosApiInstance.delete("/auth/logout");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      toast.success("Logout Success !");
      navigate("/");
      window.location.reload(true);
    } catch (error) {
      toast.error(error.response.message);
    }
  };
  return (
    <div className="pb-4 w-full bg-[#fff]  mr-8 top-[45px]  mt-5 absolute z-30 rounded-lg shadow-lg">
      <div className="px-3 py-4">
        <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
          Account
        </button>
        <button
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
          onClick={handlerLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DropDown;
