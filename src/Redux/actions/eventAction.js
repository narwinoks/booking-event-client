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

export const showEvent = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: "ShowEventRequest",
    });
    const { data } = await axiosApiInstance.get(`/events/${slug}`);
    dispatch({
      type: "ShowEventSuccess",
      payload: data?.data,
    });
  } catch (error) {
    dispatch({
      type: "ShowEventFail",
      payload: error?.message,
    });
  }
};
