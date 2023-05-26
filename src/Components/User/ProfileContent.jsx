import React from "react";
import EdiProfileContent from "./EdiProfileContent";

const ProfileContent = ({ active }) => {
  return (
    <div className="w-full">
      {active == 1 && (
        <>
          <EdiProfileContent></EdiProfileContent>
        </>
      )}
      {active == 2 && <>content my order</>}
      {active == 3 && <>change password</>}
    </div>
  );
};

export default ProfileContent;
