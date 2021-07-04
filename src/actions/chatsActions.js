import axios from "axios";

export const getChats = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const response = await axios.get("http://localhost:3000/chat");
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
