import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  loadingEvent: false,
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

  ShowEventRequest: (state) => {
    state.loading = true;
  },
  ShowEventSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.event = action.payload;
  },
  ShowEventFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  getEventTicketRequest: (state) => {
    state.loading = true;
  },
  getEventTicketSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.event = action.payload;
  },
  getEventTicketFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  getEventActiveRequest: (state) => {
    state.loadingEvent = true;
  },
  getEventActiveSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loadingEvent = false;
    state.event = action.payload;
  },
  getEventActiveFail: (state, action) => {
    state.loadingEvent = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});
