import { put, takeLatest, call, all, fork } from "redux-saga/effects";

import actions from "../actions/rooms";
import rf from "../../requests/RequestFactory";
import { times } from "lodash";
import { ADD_ROOM, GET_ROOM } from "../actions/rooms/action_types";
import { LOGIN } from "../actions/login/action_types";

function* getRoom(action) {}

function* addRoom(action) {
  try {
    yield call(
      (params) => rf.getRequest("RoomRequest").addRoom(params),
      action.params
    );
  } catch (err) {
    console.log(err);
    yield put(actions.addRoomFail(err));
  }
}

function* watchAllRooms() {
  yield takeLatest(GET_ROOM, getRoom);
  yield takeLatest(ADD_ROOM, addRoom);
}

export default function* rootSaga() {
  yield all([fork(watchAllRooms)]);
}
