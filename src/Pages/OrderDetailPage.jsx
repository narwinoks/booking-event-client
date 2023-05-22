import React from "react";
import Main from "../Layouts/Main";

const OrderDetailPage = () => {
  return (
    <Main>
      <div className="h-screen bg-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
          <form action>
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
                        className="focus:shadow-outline rounded border px-4 py-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                        id="title"
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
                      type="text"
                      className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                      id="name"
                    />
                  </div>
                  <span className="font-extralight">
                    E-voucher will be sent to this email.{" "}
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
                      type="text"
                      className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                      id="name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 bg-white px-4 py-4 md:col-span-4">
                <div className="mb-4">
                  <p className="text-xl font-medium">ORDER DETAIL</p>
                </div>
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
                        className="focus:shadow-outline rounded border px-4 py-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                        id="title"
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
                      type="text"
                      className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                      id="name"
                      placeholder="email"
                    />
                  </div>
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
                      type="text"
                      className="focus:shadow-outline w-full appearance-none rounded-md border p-4 font-semibold leading-tight text-gray-700 shadow focus:outline-none"
                      id="name"
                      placeholder="phone number"
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
                      placeholder="NO KTP"
                    />
                  </div>
                </div>
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
