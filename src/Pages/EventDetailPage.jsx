import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "../Layouts/Main";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { showEvent } from "../Redux/actions/eventAction";
import CardDetailTicket from "../Components/CartTicket/CardDetailTicket";
import parser from "html-react-parser";

const EventDetailPage = () => {
  const { slug } = useParams();
  const { event, loading } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showEvent(slug));
  }, [dispatch]);

  console.log(event);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        event && (
          <>
            <Main activeNavbar={2}>
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="items-center md:space-x-8">
                  <div className="w-full rounded-md bg-white p-10 shadow">
                    <img
                      src={event && event.thumbnail}
                      alt="image-thumbnail"
                      className="h-[400px] w-[100%] rounded-lg object-cover object-center shadow-md"
                    />
                    <div className="my-7">
                      <span className="rounded-lg border-none bg-yellow-100 px-4 py-3 text-gray-800">
                        {event.categories}
                      </span>
                      <h1 className="mt-7 text-2xl font-medium">
                        {event.name}
                      </h1>
                      <div className="flex gap-6 mt-10">
                        <div className="flex pr-4 mr-4">
                          <FaMapMarkerAlt size={15} className="text-gray-800" />
                          <p className="ml-4 font-medium text-sm">
                            {event.location}
                          </p>
                        </div>
                        <div className="flex pr-4 mr-4">
                          <FaClock size={15} className="text-gray-800" />
                          <p className="ml-4 font-medium text-sm">
                            {event.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <div>
                    <h1 className="text-xl font-normal">Highlight</h1>
                    <ul className="ml-6 mt-4 list-disc">
                      {parser(event.highlight)}
                    </ul>
                  </div>
                </div>
                <div className="mt-14 w-full">
                  <div className="rounded-md bg-[#f4f7fe] p-8 text-[#161616]">
                    <h2 className="text-lg font-medium">Info Penting</h2>
                    <ul className="ml-6 mt-4 list-disc">
                      {parser(event.other)}
                    </ul>
                  </div>
                  <div className="mt-14 w-full">
                    <p className="text-xl font-normal">Description</p>
                    <p className="mt-2 font-light">
                      {parser(event.description)}
                    </p>
                  </div>
                </div>
                <div className="grid mt-12">
                  {event.ticket.map((ticket, index) => {
                    return (
                      <>
                        <CardDetailTicket
                          key={index}
                          data={ticket}
                        ></CardDetailTicket>
                      </>
                    );
                  })}
                </div>
              </div>
            </Main>
          </>
        )
      )}
    </>
  );
};

export default EventDetailPage;
