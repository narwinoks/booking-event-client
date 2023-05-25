import axiosApiInstance from "../../utils/axiosApiInstance";

export const getTicket = (params) => async (dispatch) => {
  try {
    dispatch({
      type: "LoadTicketRequest",
    });
    const { data } = await axiosApiInstance.get(`/tickets/get-ticket-event`, {
      params: params,
    });
    dispatch({
      type: "LoadTicketSuccess",
      payload: data?.data,
    });
  } catch (error) {
    dispatch({
      type: "LoadTicketFail",
      payload: error?.message,
    });
  }
};
