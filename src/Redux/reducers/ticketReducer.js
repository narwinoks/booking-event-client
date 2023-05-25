import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  loadingTicket: false,
};

export const ticketReducer = createReducer(initialState, {
  LoadTicketRequest: (state) => {
    state.loadingTicket = true;
  },
  LoadTicketSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loadingTicket = false;
    state.tickets = action.payload;
  },
  LoadTicketFail: (state, action) => {
    state.loadingTicket = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});
