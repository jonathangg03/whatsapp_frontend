const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL":
      return { ...state, users: action.payload, loading: false, error: null };
    case "LOADING":
      return { ...state, loading: true };
    case "ERROR":
      return { ...state, users: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
