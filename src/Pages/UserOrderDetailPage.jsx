import { Link } from "@material-ui/core";
import React, { useState } from "react";
import OrderDetail from "../Components/User/OrderDetail";
import ProfileSIdebar from "../Components/User/ProfileSIdebar";
import Main from "../Layouts/Main";

const UserOrderDetailPage = () => {
  const [active, setActive] = useState(2);

  return (
    <div>
      <Main activeNavbar={2}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className={`flex py-10`}>
            <OrderDetail></OrderDetail>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default UserOrderDetailPage;
