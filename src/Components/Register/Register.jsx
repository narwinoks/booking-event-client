import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { toast } from "react-toastify";
import { server } from "../../server/server";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleConfirmation, setVisibleConfirmation] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const newForm = new FormData();
      newForm.append("avatar", avatar);
      newForm.append("username", username);
      newForm.append("email", email);
      newForm.append("password", password);
      newForm.append("password_confirmation", passwordConfirmation);

      const { data } = await axios.post(
        `${server}/auth/register`,
        newForm,
        config
      );
      setAvatar(null);
      setUsername("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      navigate("/login");
      toast.success(`Successfully registered please check your email ${email}`);
    } catch (error) {
      setErrors(error.response.data.errors);
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
              Create your Free Account
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
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`block w-full px-3 py-2 placeholder-gray-400 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                UserName
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="username"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className={`block w-full px-3 py-2 placeholder-gray-400 border ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                )}
              </div>
            </div>
            <div>
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
                  className={`block w-full px-3 py-2 placeholder-gray-400 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmation Password
              </label>
              <div className="relative mt-1">
                <input
                  type={visibleConfirmation ? "text" : "password"}
                  name="confirmation_password"
                  required
                  autoCapitalize="current-password"
                  value={passwordConfirmation}
                  onChange={(e) => {
                    setPasswordConfirmation(e.target.value);
                  }}
                  className="block w-full px-3 py-3 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {setVisibleConfirmation ? (
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
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="flex items-center mt-2">
                <span className="inline-block w-8 h-8 overflow-hidden rounded-full">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="object-cover w-full h-full rounded-full"
                    />
                  ) : (
                    <RxAvatar className="w-8 h-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="flex items-center justify-center px-4 py-2 ml-5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
                <br />
                {errors.avatar && (
                  <p className="text-red-500 mr-3 text-xs mt-1">
                    {errors.avatar}
                  </p>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
