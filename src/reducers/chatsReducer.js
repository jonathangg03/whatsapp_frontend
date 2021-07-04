const INITIAL_STATE = {
  chats: [],
  loading: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL":
      return { ...state, chats: action.payload, loading: false, error: null };
    case "LOADING":
      return { ...state, loading: true };
    case "ERROR":
      return { ...state, chats: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
