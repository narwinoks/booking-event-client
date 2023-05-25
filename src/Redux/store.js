import { configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./reducers/eventReducer";
import { locationReducer } from "./reducers/locationReducer";
import { userReducer } from "./reducers/userReducer";
import { ticketReducer } from "./reducers/ticketReducer";
import { cartReducer } from "./reducers/orderRedunce";

const Store = configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
    locations: locationReducer,
    tickets: ticketReducer,
    cart: cartReducer,
  },
});

export default Store;
