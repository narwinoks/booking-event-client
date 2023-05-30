import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosApiInstance from "../../utils/axiosApiInstance";

const EditPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosApiInstance.put(`user/change-password`, {
        old_password: oldPassword,
        new_password: newPassword,
        new_password_confirmation: newPasswordConfirmation,
      });
      toast.success("password changed successfully");
      setNewPassword("");
      setOldPassword("");
      setNewPasswordConfirmation("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className=" justify-center w-full bg-[#fff] px-4 rounded py-5">
      <div className="grid">
        <h2 className="font-medium font-Poppins text-xl">USER PROFILE</h2>
        <p className="text-sm font-Poppins font-light">
          Here you can update your password
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-8 py-4 justify-center px-8">
        <form onSubmit={handlerSubmit} aria-required={true}>
          <div>
            <div className="relative h-12 mb-2 mt-8">
              <label
                htmlFor="oldPassword"
                className="absolute -top-3 left-5 text-sm p-1 bg-slate-50 z-10"
              >
                Old Password
              </label>
              <input
                type="password"
                className="absolute px-4 left-0 top-0 w-[100%] h-[100%] border border-gray-500 rounded focus:outline-none focus:border-indigo-400"
                name="name"
                value={oldPassword}
                placeholder="Insert your name"
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
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
                type="password"
                className="absolute px-4 left-0 top-0 w-[100%] h-[100%] border border-gray-500 rounded focus:outline-none focus:border-indigo-400"
                name="name"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
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
                type="password"
                className="absolute px-4 left-0 top-0 w-[100%] h-[100%] border border-gray-500 rounded focus:outline-none focus:border-indigo-400"
                name="name"
                value={newPasswordConfirmation}
                placeholder="Insert your name"
                onChange={(e) => {
                  setNewPasswordConfirmation(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-end mt-8">
              <button className="bg-gray-800 text-white px-6 py-2 rounded-md font-Poppins font-semibold">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPassword;
