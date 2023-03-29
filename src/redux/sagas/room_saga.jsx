import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import rf from "../../requests/RequestFactory";
import utils from "../../utils";
import actions from "../actions/rooms";
import { ADD_ROOM } from "../actions/rooms/action_types";

function* getRoom(action) {}

function* addRoom(action) {
  try {
    yield call(
      (params) => rf.getRequest("RoomRequest").addRoom(params),
      action.params
    );
    utils.showNotification("Success", "Add new room successfully", "success");
  } catch (err) {
    console.log(err);
    yield put(actions.addRoomFail(err));
  }
}

function* watchRooms() {
  yield takeLatest(ADD_ROOM, addRoom);
}

export default function* rootSaga() {
  yield all([fork(watchRooms)]);
}
