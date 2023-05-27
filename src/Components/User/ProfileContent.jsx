import React from "react";
import EdiProfileContent from "./EdiProfileContent";
import EditPassword from "./EditPassword";
import OrderList from "./OrderList";

const ProfileContent = ({ active }) => {
  return (
    <div className="w-full">
      {active == 1 && (
        <>
          <EdiProfileContent></EdiProfileContent>
        </>
      )}
      {active == 2 && (
        <>
          <OrderList></OrderList>
        </>
      )}
      {active == 3 && (
        <>
          <EditPassword></EditPassword>
        </>
      )}
    </div>
  );
};

export default ProfileContent;
