import { configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./reducers/eventReducer";
import { locationReducer } from "./reducers/locationReducer";
import { userReducer } from "./reducers/userReducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
    locations: locationReducer,
  },
});

export default Store;
