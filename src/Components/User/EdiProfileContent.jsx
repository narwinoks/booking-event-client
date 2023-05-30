import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RxAvatar } from "react-icons/rx";
import axiosApiInstance from "../../utils/axiosApiInstance";
import { toast } from "react-toastify";

const EdiProfileContent = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [avatarChange, setAvatarChange] = useState(false);

  const handleImage = async (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("avatar", file);

    await axiosApiInstance
      .post(`/user/change-avatar`, formData, config)
      .then((data) => {
        window.location.reload();
        toast.success("Update Avatar Success");
      })
      .catch((error) => {
        toast.error(error.response.data.errors.avatar);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosApiInstance.put(`user/change-profile`, {
        username: username,
      });
      toast.success("Update Profile Success !");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className=" justify-center w-full bg-[#fff] px-4 rounded py-5">
      <div className="grid">
        <h2 className="font-medium font-Poppins text-xl">USER PROFILE</h2>
        <p className="text-sm font-Poppins font-light">
          Here you can set your account details.
        </p>
      </div>
      <div className="flex justify-center w-full">
        <div className="relative">
          {avatarChange ? (
            <img
              src={URL.createObjectURL(avatar)}
              className="w-[70px] h-[70px] rounded-full object-cover border-[3px] border-[#3ad132]"
              alt="image-profile-1"
            />
          ) : (
            <img
              src={avatar}
              className="w-[70px] h-[70px] rounded-full object-cover border-[3px] border-[#3ad132]"
              alt="image-profile-1"
            />
          )}
          <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
            <label htmlFor="image-upload">
              <input
                type="file"
                id="image-upload"
                accept=".jpg,.jpeg,.png"
                onChange={handleImage}
                className="sr-only"
              />
              <AiOutlineCamera />
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 py-4 justify-center px-8">
        <div>
          <div className=" bg-white rounded-md shadow shadow-slate-300 w-full">
            <div className="px-4 py-4">
              <label
                htmlFor="email"
                className="font-Poppins text-xl font-normal"
              >
                Email
              </label>
              <p className="font-Poppins text-sm font-light mt-3">{email}</p>
            </div>
            <div className="px-4 py-4">
              <label htmlFor="" className="font-Poppins text-xl font-normal">
                Phone Number
              </label>
              <p className="font-Poppins text-sm font-light mt-3">
                081477084167
              </p>
            </div>
          </div>
        </div>
        <div>
          <form aria-required={true} onSubmit={handleSubmit}>
            <div className="relative h-16 mb-2">
              <label
                htmlFor=""
                className="absolute -top-3 left-5 text-sm p-1 bg-slate-50 z-10"
              >
                Title
              </label>
              <select
                name=""
                id=""
                className="absolute px-4 left-0 top-0 w-[100%] bg-white h-[100%] border border-gray-500 rounded focus:outline-none focus:border-indigo-400"
              >
                <option value="">Title</option>
                <option value="">Mr.</option>
                <option value="">Ms.</option>
              </select>
            </div>
            <div className="relative h-16 mb-2 mt-8">
              <label
                htmlFor=""
                className="absolute -top-3 left-5 text-sm p-1 bg-slate-50 z-10"
              >
                Name
              </label>
              <input
                type="text"
                className="absolute px-4 left-0 top-0 w-[100%] h-[100%] border border-gray-500 rounded focus:outline-none focus:border-indigo-400"
                name="name"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Insert your name"
              />
            </div>
            <div className="relative h-16 mb-2 mt-8">
              <label
                htmlFor=""
                className="absolute -top-3 left-5 text-sm p-1 bg-slate-50 z-10"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="absolute px-4 left-0 top-0 w-[100%] h-[100%] border border-gray-500 rounded focus:outline-none focus:border-indigo-400"
                name="name"
                placeholder="Insert your Phone number"
              />
            </div>
            <div className="flex justify-end mt-8">
              <button
                className="bg-gray-800 text-white px-6 py-2 rounded-md font-Poppins font-semibold"
                type="submit"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EdiProfileContent;
