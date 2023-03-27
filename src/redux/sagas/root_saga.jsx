import { all } from "redux-saga/effects";
import watchAllUsers from "./login_saga";
import watchAllRooms from "./room_saga";

function* rootSaga() {
  yield all([watchAllUsers()]);
  yield all([watchAllRooms()]);
}

export default rootSaga;
