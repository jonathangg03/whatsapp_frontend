import axios from "axios";

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const response = await axios.get("http://localhost:3000/user");
    dispatch({
      type: "GET_ALL",
      payload: response.data.body,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "ERROR",
      payload: error,
    });
  }
};
