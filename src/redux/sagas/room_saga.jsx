import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import rf from "../../requests/RequestFactory";
import utils from "../../utils";
import actions from "../actions/rooms";
import {
  ADD_ROOM,
  BLOCK_ROOM,
  GET_ROOM,
  UPDATE_ROOM,
} from "../actions/rooms/action_types";

function* getRoom(action) {
  try {
    const { data } = yield call(
      (params) => rf.getRequest("RoomRequest").getRoom(params),
      action.params
    );
    yield put(actions.getRoomSucceed(data.data));
  } catch (err) {
    console.log(err);
    yield put(actions.getRoomFail(err));
  }
}

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

function* updateRoom(action) {
  try {
    yield call(
      (params) => rf.getRequest("RoomRequest").updateRoom(params),
      action.params
    );
  } catch (err) {
    console.log(err);
    yield put(actions.udpateRoomFail(err));
  }
}

function* blockRoom(action) {
  try {
    yield call(
      (params) => rf.getRequest("RoomRequest").blockRoom(params),
      action.params
    );
  } catch (err) {
    console.log(err);
    yield put(actions.blockRoomFail(err));
  }
}

function* watchRooms() {
  yield takeLatest(ADD_ROOM, addRoom);
  yield takeLatest(GET_ROOM, getRoom);
  yield takeLatest(UPDATE_ROOM, updateRoom);
  yield takeLatest(BLOCK_ROOM, blockRoom);
}

export default function* rootSaga() {
  yield all([fork(watchRooms)]);
}
