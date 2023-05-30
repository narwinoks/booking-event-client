import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosApiInstance from "../../utils/axiosApiInstance";

const OrderList = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [orders, setOrders] = useState({});

  const fetchData = async () => {
    try {
      const { data } = await axiosApiInstance.get("/order/get-order-user", {
        params: {
          startDate: startDate,
          endDate: endDate,
        },
      });
      setOrders(data?.data);
    } catch (error) {
      toast.error("Internal Server Error", error);
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

    const formattedStartDate = threeMonthsAgo.toISOString().split("T")[0];
    const formattedEndDate = currentDate.toISOString().split("T")[0];

    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      fetchData();
    }
  }, [startDate, endDate]);
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 40, flex: 0.7 },
    {
      field: "name",
      headerName: "Event Name",
      minWidth: 150,
      flex: 0.6,
    },
    {
      field: "status",
      headerName: "status",
      type: "number",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "Show",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user-order/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const rows = [];
  orders.length > 0 &&
    orders.forEach((item) => {
      rows.push({
        id: item.id,
        name: item.event_name,
        status: item.status,
      });
    });
  return (
    <>
      <div className="justify-center w-full bg-[#fff] px-4 rounded py-5">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">My Order</h2>
          <p className="font-light text-sm">History Order</p>
        </div>
        <hr className="text-gray-600 my-8" />
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between sm:">
          <div className="grid grid-cols-2 justify-center sm:mb-4">
            <label htmlFor="" className="font-Poppins text-xl py-2 pl-4">
              Start Date
            </label>
            <input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              type="date"
              className="border px-4 py-2 rounded-md focus:outline-none border-1 w-full focus:border-indigo-400"
            />
          </div>
          <div className="grid grid-cols-2 justify-center">
            <label htmlFor="" className="font-Poppins text-xl py-2 pl-4">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border px-4 py-2 rounded-md focus:outline-none border-1 w-full focus:border-indigo-400"
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-1 mt-10 bg-white">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};

export default OrderList;
