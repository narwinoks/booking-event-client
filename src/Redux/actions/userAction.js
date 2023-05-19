import { server } from "../../server/server";
import axiosApiInstance from "../../utils/axiosApiInstance";

// load user profile
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const { data } = await axiosApiInstance.get("/user/profile");
    dispatch({
      type: "LoadUserSuccess",
      payload: data?.data,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error?.message,
    });
  }
};
