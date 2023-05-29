import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Main from "../Layouts/Main";
import { redirect } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import axiosApiInstance from "../utils/axiosApiInstance";
const OrderDetailPage = () => {
  const { cart, loadingTicket } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [errors, setErrors] = useState({});
  const orders = [];

  for (let i = 0; i < cart.order; i++) {
    orders.push({
      ticket_id: cart.ticket_id,
      value: "",
    });
  }

  useEffect(() => {}, [user]);
  // set state form
  const [orderData, setOrderData] = useState({
    order: {
      title: "",
      name: "",
      email: "",
      phone_number: "",
    },
    order_items: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevState) => ({
      ...prevState,
      order: {
        ...prevState.order,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosApiInstance.post(`order/create-order`, {
        order: orderData.order,
        order_items: orderData.order_items,
      });
      window.open(data.snap_url, "_blank");
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  const handleOrderItemChange = (e, index) => {
    const { name, value } = e.target;
    setOrderData((prevState) => {
      const updatedOrderItems = [...prevState.order_items];
      updatedOrderItems[index] = {
        ...updatedOrderItems[index],
        [name]: value,
        quantity: 1,
        ticket_id: cart.ticket_id,
      };
      return {
        ...prevState,
        order_items: updatedOrderItems,
      };
    });
  };

  useEffect(() => {
    if (user) {
      setOrderData((prevState) => ({
        ...prevState,
        order: {
          ...prevState.order,
          name: user.username,
          email: user.email,
        },
      }));
    }
  }, [user]);

  const handleToggleForm = (index) => {
    console.log(index);
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <Main>
      <div className="bg-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
          <form aria-required={true} onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-4 px-4 py-4">
              <div className="col-span-12 bg-white px-4 py-4 md:col-span-8">
                <div className="mb-4">
                  <p className="text-xl font-medium">ORDER DETAIL</p>
                </div>
                <hr className="mb-4" />
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 sm:col-span-3">
                    <div className="relative mb-4">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="title"
                      >
                        Title
                      </label>
                      <select
                        className={`focus:shadow-outline rounded border px-4 py-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none border-gray-300
                        `}
                        id="title"
                        name="title"
                        value={orderData.order.title}
                        onChange={handleChange}
                      >
                        <option value="">Title</option>
                        <option value="mr">Mr.</option>
                        <option value="mrs">Mrs.</option>
                        <option value="ms">Ms.</option>
                        <option value="dr">Dr.</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-10 sm:col-span-9">
                    <div className="mb-4">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        required
                        value={orderData.order.name}
                        onChange={handleChange}
                        type="text"
                        className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                        id="name"
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="name"
                    >
                      Email
                    </label>
                    <input
                      value={orderData.order.email}
                      onChange={handleChange}
                      readOnly
                      required
                      type="email"
                      className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                      id="name"
                    />
                  </div>
                  <span className="font-extralight">
                    E-voucher will be sent to this email.
                  </span>
                </div>
                <div className="col-span-12">
                  <div className="mb-4 mt-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="name"
                    >
                      Phone Number
                    </label>
                    <input
                      value={orderData.order.phone_number}
                      onChange={handleChange}
                      required
                      type="number"
                      className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                      id="name"
                      name="phone_number"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 bg-white px-4 py-4 md:col-span-4">
                <hr className="mb-4" />
                <div className="mb-4 grid grid-cols-12 gap-2">
                  <div className="col-span-4">
                    <img
                      src="https://placehold.co/400x400"
                      className="h-[50px] w-[50px] rounded-sm"
                      alt=""
                    />
                  </div>
                  <div className="col-span-8">
                    <p className="text-lg font-medium">
                      Snapdragon Mobile Challenge Finals MLBB, Jakarta Pusat
                    </p>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="py-4">
                  <div>
                    <p className="mb-2 text-sm font-medium">
                      Legend - Wave 1 - Daily Pass Friday
                    </p>
                    <span className="font-normal">2 Tiket 2 Pax </span>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="py-4">
                  <p className="mb-2 text-sm font-light">Tanggal Dipilih</p>
                  <h4 className="text-lg font-medium">Jum, 21 Jul 2023</h4>
                </div>
                <hr />
                <ul className="py-4">
                  <li className="mb-1 font-light text-gray-800">
                    Berlaku di tanggal terpilih
                  </li>
                  <li className="mb-1 font-light text-gray-800">
                    Tidak perlu reservasi
                  </li>
                  <li className="mb-1 font-light text-gray-800">
                    Tidak bisa refund
                  </li>
                </ul>
                <hr className="mb-4" />
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">Total</h2>
                  <p className="text-xl font-medium">200.0000</p>
                </div>
              </div>
              <div className="col-span-12 bg-white px-4 py-4 md:col-span-8">
                <div className="mb-4">
                  <p className="text-xl font-medium">ORDER DETAIL</p>
                </div>
                <div className="flex justify-between"></div>
                <hr className="mb-4" />
                {orders &&
                  orders.map((order, index) => {
                    const isExpanded = index === expandedIndex;
                    const orderItem = orderData?.order_items[index] || {};
                    return (
                      <div key={index}>
                        <div className="mt-10 border-x-slate-600">
                          <div
                            className="flex cursor-pointer justify-between"
                            onClick={() => handleToggleForm(index)}
                          >
                            <p className="font-medium text-xl font-Poppins pt-2 pb-4">
                              Ticket Owner Data
                            </p>
                            <div>
                              <AiOutlineDown
                                size={20}
                                className="cursor-pointer"
                              ></AiOutlineDown>
                            </div>
                          </div>
                          {isExpanded && (
                            <>
                              <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-2 sm:col-span-3">
                                  <div className="relative mb-4">
                                    <label
                                      className="mb-2 block text-sm font-bold text-gray-700"
                                      htmlFor="title"
                                    >
                                      Title
                                    </label>
                                    <select
                                      className="focus:shadow-outline rounded border px-4 py-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                                      id="title"
                                      name="title"
                                      value={orderItem?.title || ""}
                                      required
                                      onChange={(e) =>
                                        handleOrderItemChange(e, index)
                                      }
                                    >
                                      <option value>Title</option>
                                      <option value="mr">Mr.</option>
                                      <option value="mrs">Mrs.</option>
                                      <option value="ms">Ms.</option>
                                      <option value="dr">Dr.</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-span-10 sm:col-span-9">
                                  <div className="mb-4">
                                    <label
                                      className="mb-2 block text-sm font-bold text-gray-700"
                                      htmlFor="name"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                                      id="name"
                                      name="name"
                                      required
                                      value={orderItem?.name || ""}
                                      onChange={(e) =>
                                        handleOrderItemChange(e, index)
                                      }
                                      placeholder="name"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-span-12">
                                <div className="mb-4">
                                  <label
                                    className="mb-2 block text-sm font-bold text-gray-700"
                                    htmlFor="name"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                                    id="name"
                                    required
                                    placeholder="email"
                                    name="email"
                                    value={orderItem?.email || ""}
                                    onChange={(e) =>
                                      handleOrderItemChange(e, index)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-span-12">
                                <div className="mb-4 mt-4">
                                  <label
                                    className="mb-2 block text-sm font-bold text-gray-700"
                                    htmlFor="name"
                                    required
                                  >
                                    Phone Number
                                  </label>
                                  <input
                                    type="text"
                                    className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                                    id="name"
                                    placeholder="phone number"
                                    name="phone_number"
                                    value={orderItem?.phone_number || ""}
                                    onChange={(e) =>
                                      handleOrderItemChange(e, index)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-span-12">
                                <div className="mb-4 mt-4">
                                  <label
                                    className="mb-2 block text-sm font-bold text-gray-700"
                                    htmlFor="name"
                                  >
                                    No KTP
                                  </label>
                                  <input
                                    type="text"
                                    className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                                    id="name"
                                    required
                                    value={orderItem?.no_ktp || ""}
                                    placeholder="NO KTP"
                                    name="no_ktp"
                                    onChange={(e) =>
                                      handleOrderItemChange(e, index)
                                    }
                                  />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="px-4 py-4">
              <button className="rounded-md bg-yellow-400 px-4 py-4 font-extrabold text-gray-800 hover:bg-gray-800 hover:text-white">
                NEXT PAYMENT
              </button>
            </div>
          </form>
        </div>
      </div>
    </Main>
  );
};

export default OrderDetailPage;
