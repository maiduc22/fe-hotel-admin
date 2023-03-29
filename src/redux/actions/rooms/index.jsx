import {
  ADD_ROOM,
  ADD_ROOM_FAIL,
  ADD_ROOM_SUCCEED,
  GET_ROOM,
  GET_ROOM_FAIL,
  GET_ROOM_SUCCEED,
} from "./action_types";

export default {
  getRoom: (data) => ({
    type: GET_ROOM,
    param: {
      data,
    },
  }),
  getRoomSucceed: (data) => ({
    type: GET_ROOM_SUCCEED,
    param: {
      data,
    },
  }),
  getRoomFail: (err) => ({
    type: GET_ROOM_FAIL,
    err,
  }),
  addRoom: (params) => ({
    type: ADD_ROOM,
    params,
  }),
  addRoomSucceed: (data) => ({
    type: ADD_ROOM_SUCCEED,
    data,
  }),
  addRoomFail: (err) => ({
    type: ADD_ROOM_FAIL,
    err,
  }),
};
