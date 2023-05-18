import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { server } from "../../server/server";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${server}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("refresh_token", data.data.refresh_token);
      toast.success("Login Successfully !");
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };
  return (
    <div className="h-screen flex">
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        image
      </div>
      <div className="w-1/2 px-4 py-8 bg-white shadow sm:rounded-lg rounded-sm sm:px-10 flex items-center justify-center">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-3/6 ">
          <form onSubmit={handlerSubmit} method="post" className="space-y-6">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white pb-3">
              Login Account
            </h2>
            <div className="flex w-full justify-between gap-6">
              <div className="w-1/2">
                <a className="login-button text-lg cursor-pointer bg-gray-100 border-[1px] w-full hover:bg-gray-200 border-gray-500 rounded   px-4 py-3 text-gray-700 flex items-center justify-center">
                  <FaGoogle className="mr-2" />
                  Login with Google
                </a>
              </div>
              <div className="w-1/2">
                <a className="login-button text-lg cursor-pointer bg-gray-100 border-[1px] w-full hover:bg-gray-200 border-gray-500 rounded   px-4 py-3 text-gray-700 flex items-center justify-center">
                  <FaFacebook className="mr-2" />
                  Login with Facebook
                </a>
              </div>
            </div>
            <div className="divider-container flex items-center mt-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="flex my-10 text-center justify-center">
              {/* error response */}
              <p className="text-red-500 text-2xl mt-1">
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </p>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 mb-4">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`block w-full px-3 py-2 placeholder-gray-400 border border-gray-300  rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
              </div>
              <div className="mb-20">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    required
                    autoCapitalize="current-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className={`block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute cursor-pointer right-2 top-2"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute cursor-pointer right-2 top-2"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2  font-medium text-xl text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
