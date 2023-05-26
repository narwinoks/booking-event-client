import React from "react";
import { RxPerson } from "react-icons/rx";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
  AiOutlineLogin,
  AiOutlineShopping,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const ProfileSIdebar = ({ active, setActive }) => {
  const handleImage = () => {};
  const handlerLogout = () => {};
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div className="lg:flex sm:hidden justify-center items-center w-full mb-8">
        <div className="lg:relative">
          <img
            src="https://placehold.co/400"
            className="w-[100px] h-[100px] rounded-full object-cover border-[3px] border-[#3ad132] hidden sm:block"
            alt="image-profile-1"
          />
          <div
            className={`w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]  sm:flex`}
          >
            <input
              type="file"
              id="image"
              className="hidden"
              onChange={handleImage}
            />
            <label htmlFor="image">
              <AiOutlineCamera />
            </label>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Profile
        </span>
      </div>
      <div
        className="flex items-center justify-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <AiOutlineShopping size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          My Order
        </span>
      </div>
      <div
        className="flex items-center justify-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <RiLockPasswordLine size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Change Password
        </span>
      </div>
      <div
        className="flex items-center justify-center cursor-pointer w-full mb-8"
        onClick={() => setActive(8) || handlerLogout()}
      >
        <AiOutlineLogin size={20} color={active === 8 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default ProfileSIdebar;
