import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
};

export const eventReducer = createReducer(initialState, {
  LoadEventRequest: (state) => {
    state.loading = true;
  },
  LoadEventSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.events = action.payload;
  },
  LoadEventFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});
