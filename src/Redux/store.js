import { configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./reducers/eventReducer";
import { locationReducer } from "./reducers/locationReducer";
import { userReducer } from "./reducers/userReducer";
import { ticketReducer } from "./reducers/ticketReducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
    locations: locationReducer,
    tickets: ticketReducer,
  },
});

export default Store;
