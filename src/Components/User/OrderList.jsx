import React from "react";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const OrderList = () => {
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
            <Link to={`/product/${params.id}`}>
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
  return (
    <>
      <div className="justify-center w-full bg-[#fff] px-4 rounded py-5">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">My Order</h2>
          <p className="font-light text-sm">History Order</p>
        </div>
        <hr className="text-gray-600 my-8" />
        <div className="flex justify-between">
          <div className="grid grid-cols-2 justify-center">
            <label htmlFor="" className="font-Poppins text-xl py-2 pl-4">
              Start Date
            </label>
            <input
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
