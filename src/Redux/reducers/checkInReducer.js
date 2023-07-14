import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
};
export const checkInReducer = createReducer(initialState, {
  LoadCheckInRequest: (state) => {
    state.loading = true;
  },
  LoadCheckInSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.checkIn = action.payload;
  },
  LoadCheckInFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});
