import axiosApiInstance from "../../utils/axiosApiInstance";

export const getEvents = (params) => async (dispatch) => {
  try {
    dispatch({
      type: "LoadEventRequest",
    });
    const { data } = await axiosApiInstance.get(`/events`, {
      params: params,
    });
    dispatch({
      type: "LoadEventSuccess",
      payload: data?.data,
    });
  } catch (error) {
    dispatch({
      type: "LoadEventFail",
      payload: error?.message,
    });
  }
};
