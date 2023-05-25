import React, { useEffect, useState } from "react";
import Main from "../Layouts/Main";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Loading from "react-loading";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../Redux/actions/ticketAction";

const OrderPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyValue = searchParams.get("key");
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();

  const { tickets, loadingTicket } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(
      getTicket({
        slug,
        keyValue,
      })
    );
  }, []);

  const handlePrevSlide = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? tickets.length - 1 : prevSlide - 1
      );
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (keyValue) {
      const index =
        tickets && tickets.findIndex((ticket) => ticket.key === keyValue);
      if (index !== -1) {
        setCurrentSlide(index);
      }
    }
  }, [tickets, keyValue]);

  console.log(currentSlide);
  const handleNextSlide = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === tickets.length - 1 ? 0 : prevSlide + 1
      );
      setLoading(false);
    }, 500);
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
                  initialSlide={currentSlide}
                  onSlideChange={(swiper) =>
                    setCurrentSlide(swiper.activeIndex)
                  }
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  className="mySwiper"
                >
                  {tickets?.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div>
                        <div className="py-5">
                          <p className="text-sm font-Poppins font-normal mb-3">
                            {/* {slide.name} */}
                            {index}
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
                  type="date"
                  className="block w-full py-4 px-4  placeholder-gray-400 border border-gray-300  rounded-md shadow-sm mt-3 appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                        240.0000
                      </span>
                      <button className="rounded-full bg-blue-700 font-bold text-white px-4 py-2">
                        +
                      </button>
                      <input
                        type="text"
                        value="1"
                        readOnly
                        className="hover:border-none mx-2 border-none px-2 py-1 w-6 font-semibold text-xl"
                      />
                      <button className="rounded-full bg-blue-700 font-bold text-white px-4 py-2">
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
                  <p className="font-medium text-xl">Tanggal</p>
                  <p className="font-medium text-xl">29 jun 2023</p>
                </div>
                <hr className="text-black mt-10" />
                <div className="flex justify-between mt-5">
                  <div className="block">
                    <p className="font-light ">Sub Total</p>
                    <h3 className="font-bold  text-xl">3.400.000</h3>
                  </div>
                  <button className="bg-blue-700 font-semibold text-white px-8 py-2 rounded">
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
