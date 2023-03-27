import { combineReducers } from "redux";
import login_reducer from "./login_reducer";
import room_reducer from "./room_reducer";
const allReducers = combineReducers({
  login_reducer,
  room_reducer,
});

export default allReducers;
