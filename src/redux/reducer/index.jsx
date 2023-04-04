import { combineReducers } from "redux";
import login_reducer from "./login_reducer";
import room_reducer from "./room_reducer";
import booking_reducer from "./booking_reducer";
import service_reducer from "./service_reducer";
import statistics_reducer from "./statistics_reducer";

const allReducers = combineReducers({
  login_reducer,
  room_reducer,
  booking_reducer,
  service_reducer,
  statistics_reducer,
});

export default allReducers;
