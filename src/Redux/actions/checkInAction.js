import axiosApiInstance from "../../utils/axiosApiInstance";

export const getAllOrderCheckIn = (params) => async (dispatch) => {
  try {
    dispatch({
      type: "LoadCheckInRequest",
    });
    const { data } = await axiosApiInstance.get(`/order-detail/list`, {
      params: params,
    });
    dispatch({
      type: "LoadCheckInSuccess",
      payload: data?.data,
    });
  } catch (error) {
    dispatch({
      type: "LoadCheckInFail",
      payload: error?.message,
    });
  }
};
