import React from "react";
import axiosApiInstance from "../../utils/axiosApiInstance";
import { toast } from "react-toastify";

const CheckIn = ({ setSearch, setEventId, events, checkIn }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSelectChange = (event) => {
    setEventId(event.target.value);
  };

  return (
    <div className="mt-[40px]">
      <h4 className="font-medium text-center mb-10">FORM CHECK IN EVENT</h4>
      <select
        className="py-2 px-4 border border-gray-500 rounded-md mb-5 hover:border-gray-500  focus:outline-none focus:border-gray-500"
        onChange={handleSelectChange}
      >
        <option value="">Select Event</option>
        {events?.map((data, i) => {
          return <option value={data.id}>{data.name}</option>;
        })}
      </select>
      <form action="">
        <input
          type="text"
          className="py-4 text-center w-full border-gray-500 px-2 hover:border-gray-500 rounded-md focus:outline-none focus:border-gray-500"
          placeholder="Search Order Id Or Name Order?"
          onChange={handleSearchChange}
        />
      </form>
      {checkIn?.length > 0 &&
        checkIn.map((data, i) => {
          const handleFormSubmit = async (event) => {
            event.preventDefault();
            console.log("success");
            try {
              const response = axiosApiInstance.post("/checkin", {
                order_item_id: data.id,
              });
              toast.success("Check In Success !");
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            } catch (error) {
              toast.error("error: " + error);
            }
          };
          return (
            <div
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 my-5"
              key={i}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Event Name: {data.event_name} #{data.order_code}
              </h2>
              <div className="py-2">
                <p className="text-sm text-gray-600">
                  Event At: {data.event_at}
                </p>
                <p className="text-sm text-gray-600">
                  Ticket Category:{data.ticket_type}
                </p>
                <p className="text-sm text-gray-600">
                  Assigned To: {data.order_name} {data.nik}
                </p>
                {checkIn.status ? (
                  <p className="text-xl font-semibold text-red-600">
                    already checked in
                  </p>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <input type="hidden" value={data.id} />
                    <button
                      type="submit"
                      className="border-2 mt-5 py-2 px-6 bg-transparent border-gray-800 rounded-md text-gray-800 hover:bg-gray-800 hover:text-white"
                    >
                      Check In
                    </button>
                  </form>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CheckIn;
