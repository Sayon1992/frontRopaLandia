import { LOGIN } from "../actions/auth";

const initialState = {
  loggedIn: false,
  dataLogged: {},
  email: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        dataLogged: action.resData,
        email: action.resData.email,
      };
    default:
      return state;
  }
};
