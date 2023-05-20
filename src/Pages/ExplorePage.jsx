import React, { useEffect, useState } from "react";
import Filter from "../Components/Filter/Filter";
import Main from "../Layouts/Main";
import OrderByDropdown from "../Components/Elements/OrderVyDropdown";
import { FaUndo } from "react-icons/fa";
import CartTicket from "../Components/CartTicket/CartTicket";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../Redux/actions/eventAction";

const ExplorePage = () => {
  const { events, loading } = useSelector((state) => state.events);
  const [page, setPage] = useState(1);
  const [event, setEvent] = useState([]);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300000);
  const [order, setOrder] = useState("date");

  console.log(order);
  useEffect(() => {
    dispatch(
      getEvents({
        type: "all",
        page: page,
        location: location,
        search: search,
        date,
        min_price: minPrice,
        max_price: maxPrice,
        order: order,
      })
    );
  }, [dispatch, page, location, search, date, minPrice, maxPrice, order]);

  useEffect(() => {
    if (Array.isArray(events)) {
      setEvent((prevEvents) => [...prevEvents, ...events]);
    }
  }, [events]);

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight;
    if (isBottom && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setEvent([]);
    setPage(1);
  }, [location, search, date, minPrice, maxPrice, order]);

  return (
    <>
      <Main activeNavbar={2}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 px-4 mb-8">
              <Filter
                location={location}
                setLocation={setLocation}
                setSearch={setSearch}
                setDate={setDate}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
              ></Filter>
            </div>
            <div className="w-full md:w-3/4 px-4">
              <div className="flex justify-between">
                <button className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none">
                  <FaUndo className="h-5 w-5 mr-2" />
                  Reset
                </button>
                <OrderByDropdown setOrder={setOrder}></OrderByDropdown>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7">
                {event &&
                  event.map((data, i) => {
                    return <CartTicket data={data} key={i}></CartTicket>;
                  })}
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default ExplorePage;
