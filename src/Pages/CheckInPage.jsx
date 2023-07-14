import React, { useEffect, useState } from "react";
import CheckIn from "../Components/CheckIn/CheckIn";
import Main from "../Layouts/Main";
import { useDispatch, useSelector } from "react-redux";
import { getEventActive } from "../Redux/actions/eventAction";
import { getAllOrderCheckIn } from "../Redux/actions/checkInAction";


const CheckInPage = () => {
  const { checkIn, loading, error } = useSelector((state) => state.checkIn);
  const { event, loadingEvent } = useSelector((state) => state.events);
  const [search, setSearch] = useState("a");
  const [eventId, setEventId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllOrderCheckIn({
        event_id: eventId,
        search,
      })
    );
  }, [dispatch, search, eventId]);
  useEffect(() => {
    dispatch(getEventActive());
  }, [dispatch]);

  return (
    <div>
      <Main activeNavbar={3}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
          <CheckIn
            setSearch={setSearch}
            setEventId={setEventId}
            checkIn={checkIn}
            events={event}
          ></CheckIn>
        </div>
      </Main>
    </div>
  );
};

export default CheckInPage;
