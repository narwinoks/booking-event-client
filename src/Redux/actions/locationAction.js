import axiosApiInstance from "../../utils/axiosApiInstance";

export const getLocation = (params) => async (dispatch) => {
  try {
    dispatch({
      type: "LoadLocationRequest",
    });
    const { data } = await axiosApiInstance.get(`/locations`, {
      params: params,
    });
    dispatch({
      type: "LoadLocationSuccess",
      payload: data?.data,
    });
  } catch (error) {
    dispatch({
      type: "LoadLocationFail",
      payload: error?.message,
    });
  }
};
