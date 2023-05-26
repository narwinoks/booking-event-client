import React, { useState } from "react";
import styles from "../Assets/styles/styles";
import ProfileContent from "../Components/User/ProfileContent";
import ProfileSIdebar from "../Components/User/ProfileSIdebar";
import Main from "../Layouts/Main";
const UserProfilePage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Main activeNavbar={1}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className={`flex py-10`}>
            <div className="w-[50px] 800px:w-[355px] sticky 800px:my-0 mt-[10%]  pr-4">
              <ProfileSIdebar
                active={active}
                setActive={setActive}
              ></ProfileSIdebar>
            </div>
            <ProfileContent active={active}></ProfileContent>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default UserProfilePage;
