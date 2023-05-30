import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosApiInstance from "../../utils/axiosApiInstance";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosApiInstance.get(
          `/order/get-order-detail/${id}`
        );
        setOrder(data.data);
      } catch (error) {
        toast.error("Data Not Found", error);
      }
    };
    fetchData();
  }, []);

  const redirectToPayment = () => {
    window.open(order?.snap_url, "_blank");
  };

  return (
    <div className=" justify-center w-full bg-[#fff] px-4 rounded py-5">
      <div className="flex justify-between">
        <div>
          <h2 className="font-medium font-Poppins text-xl">
            ORDER ID #{order?.id}
          </h2>
          <p className="text-sm font-Poppins font-light">
            Here you can update your password
          </p>
        </div>
        <Link to={"/profile"}>
          <button className="bg-gray-800  py-2 px-4 text-white font-Poppins font-semibold">
            BACK
          </button>
        </Link>
      </div>
      <hr className="text-gray-800 my-8" />
      <div className="grid mt-8">
        <p className="font-semibold font-Poppins text-xl">{order?.name}</p>
        <div className="bg-gray-100 rounded-md px-4 py-6 shadow mt-8 w-full">
          <div className="w-full flex justify-between pb-4">
            <p className="font-medium font-Poppins text-lg">Status :</p>
            <p className="font-semibold font-Poppins text-lg bg-yellow-400 rounded-sm px-4 py-2">
              {order?.status}
            </p>
          </div>
          <div className="w-full flex justify-between">
            <p className="font-medium font-Poppins text-lg">Event Date :</p>
            <p className="font-semibold font-Poppins text-lg ">{order?.date}</p>
          </div>
          <div className="flex mt-8">
            <button
              onClick={redirectToPayment}
              className="bg-yellow-400 font-Poppins font-medium  text-xl px-5 py-2 rounded-md  shadow hover:bg-yellow-500 hover:font-semibold"
            >
              Payment
            </button>
          </div>
        </div>
        <div className=" mt-8">
          <h2 className="font-semibold font-Poppins text-lg">ORDER ITEM</h2>
          <ul className="mt-8 px-5">
            {order &&
              order.items.map((items, i) => {
                return (
                  <li key={i}>
                    <span className="font-bold">{items.name}:</span>
                    <a
                      href={items.file ?? "#"}
                      className="ml-2 underline text-blue-600"
                    >
                      {items.file ? "Download" : "Pending"}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
