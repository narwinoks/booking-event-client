import { configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./reducers/eventReducer";
import { userReducer } from "./reducers/userReducer";

const Store = configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
  },
});

export default Store;
