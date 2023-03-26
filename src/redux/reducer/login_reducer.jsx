import { LOGIN_SUCCEED } from "../actions/login/action_types";

export default (state = { token: {}, isAuth: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return {
        ...state,
        isAuth: true,
      };
    default:
      return {
        ...state,
      };
  }
};
