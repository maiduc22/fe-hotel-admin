import { combineReducers } from "redux";
import login_reducer from "./login_reducer";

const allReducers = combineReducers({
  login_reducer,
});

export default allReducers;
