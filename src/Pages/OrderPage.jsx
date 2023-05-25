import React, { useEffect, useState } from "react";
import Main from "../Layouts/Main";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Loading from "react-loading";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../Redux/actions/ticketAction";
import { addTocart } from "../Redux/actions/orderAction";

const OrderPage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchParams] = useSearchParams();
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(0);
  const [order, setOrder] = useState(1);
  const [ticketId, setTicketId] = useState(0);
  const { tickets, loadingTicket } = useSelector((state) => state.tickets);
  useEffect(() => {
    const activeIndexParam = searchParams.get("swiper");
    const index =
      tickets && tickets.findIndex((ticket) => ticket.id == activeIndexParam);
    if (index >= 0) {
      setActiveIndex(index);
      const activeSlide = tickets[index];
      setDate(activeSlide.date);
      setPrice(activeSlide.price);
      setTicketId(activeSlide.id);
    }
  }, [searchParams, tickets]);

  useEffect(() => {
    dispatch(
      getTicket({
        slug,
      })
    );
  }, [dispatch, slug]);

  useEffect(() => {
    if (swiper !== null && activeIndex !== null) {
      swiper.slideTo(activeIndex, 0);
    }
  }, [swiper, activeIndex]);

  const handlePrevSlide = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const handleSlideChange = () => {
    if (swiper !== null) {
      const newIndex = swiper.activeIndex;
      setActiveIndex(newIndex);
      searchParams.set("swiper", tickets[newIndex].id);
      navigate(`?${searchParams.toString()}`);
      // set value date dll
      const activeSlide = tickets[newIndex];
      setDate(activeSlide.date);
      setPrice(activeSlide.price);
      setTicketId(activeSlide.id);
    }
  };

  const handleIncreaseOrder = () => {
    if (order < 10) {
      setOrder((prevOrder) => prevOrder + 1);
    }
  };

  const handleDecreaseOrder = () => {
    if (order > 1) {
      setOrder((prevOrder) => prevOrder - 1);
    }
  };

  const handlerNextStep = () => {
    dispatch(addTocart({ ticket_id: ticketId, order: order }));
    navigate("/order-detail");
  };

  return (
    <Main>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
        <p className="font-semibold text-2xl my-4">Order Details</p>
        <div className="flex  flex-wrap">
          <div className="w-full md:w-2/6 px-4 bg-blue-100 p-5">
            <div className="flex justify-between mb-5">
              <div>
                <p className="font-medium text-xl">Selected Packages</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-white p-2 font-semibold rounded-sm hover:shadow-amber-100"
                  onClick={handlePrevSlide}
                >
                  <BsArrowLeft
                    className="cursor-pointer"
                    size={12}
                  ></BsArrowLeft>
                </button>
                <button
                  className="bg-white p-2 font-semibold rounded-sm hover:shadow-amber-100"
                  onClick={handleNextSlide}
                >
                  <BsArrowRight
                    className="cursor-pointer"
                    size={12}
                  ></BsArrowRight>
                </button>
              </div>
            </div>
            <div
              className="bg-white p-3 border-blue-600 rounded-md shadow-md"
              id="content"
            >
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <Loading type="spin" color="#000" height={50} width={50} />
                </div>
              ) : (
                <Swiper
                  onSwiper={setSwiper}
                  onSlideChange={handleSlideChange}
                  navigation
                >
                  {tickets?.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div>
                        <div className="py-5">
                          <p className="text-sm font-Poppins font-normal mb-3">
                            {slide.name}
                          </p>
                          <p className="text-2xl font-semibold text-red-500">
                            {slide.price}
                          </p>
                        </div>
                        <hr className="justify-center text-gray-500" />
                        <ul className="list-none ml-6 my-4 pb-3">
                          <li className="mb-3">
                            <FaCheckCircle className="inline-block mr-2 text-green-500" />
                            Informasi Penukaran Tiket
                          </li>
                          <li className="mb-3">
                            <FaCheckCircle className="inline-block mr-2 text-green-500" />
                            Tiket Sudah Termasuk
                          </li>
                          <li className="mb-3">
                            <FaCheckCircle className="inline-block mr-2 text-green-500" />
                            Syarat Ketentuan
                          </li>
                        </ul>
                        <hr className="justify-center text-gray-500 pb-3" />
                        <p className="text-sm font-normal text-gray-400">
                          Lihat informasi Penukaran Tiket, Tiket Sudah Termasuk,
                          dan Syarat Ketentuan di sini.
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
          <div className="w-full md:w-4/6 px-4">
            <div className="bg-gray-100 mb-8 flex justify-center items-center h-44 px-4 py-6">
              <div className="w-full pb-4">
                <label
                  className="font-extralight font-Poppins text-xl mb-10"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  type="text"
                  className="block w-full py-4 px-4  placeholder-gray-400 border border-gray-300  rounded-md shadow-sm mt-3 appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="bg-gray-100 flex justify-center items-center h-44 px-4 py-6">
              <div className="w-full py-6 rounded">
                <div className="border">
                  <div className="flex justify-between py-6 bg-white rounded-md px-4">
                    <p className="font-semibold text-xl">Pax</p>
                    <div>
                      <span className="font-bold text-red-400 text-xl text-start m-6">
                        {parseFloat(price).toLocaleString("id-ID")}
                      </span>
                      <button
                        className="rounded-full bg-blue-700 font-bold text-white px-4 py-2"
                        onClick={handleIncreaseOrder}
                      >
                        +
                      </button>
                      <input
                        type="text"
                        value={order}
                        readOnly
                        className="hover:border-none mx-2 border-none px-2 py-1 w-10 font-semibold text-xl"
                      />
                      <button
                        className="rounded-full bg-blue-700 font-bold text-white px-4 py-2"
                        onClick={handleDecreaseOrder}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 flex mt-5  h-50 px-4 py-6">
              <div className="w-full py-6 rounded">
                <div className="flex justify-between px-4">
                  <p className="font-medium text-xl">Date</p>
                  <p className="font-medium text-xl">{date}</p>
                </div>
                <hr className="text-black mt-10" />
                <div className="flex justify-between mt-5">
                  <div className="block">
                    <p className="font-light ">Sub Total</p>
                    <h3 className="font-bold  text-xl">
                      {parseFloat(order * price).toLocaleString("id-ID")}
                    </h3>
                  </div>
                  <button
                    className="bg-blue-700 font-semibold text-white px-8 py-2 rounded"
                    onClick={handlerNextStep}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default OrderPage;
