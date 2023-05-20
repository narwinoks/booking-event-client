import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
};

export const locationReducer = createReducer(initialState, {
  LoadLocationRequest: (state) => {
    state.loading = true;
  },
  LoadLocationSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.locations = action.payload;
  },
  LoadLocationFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});
