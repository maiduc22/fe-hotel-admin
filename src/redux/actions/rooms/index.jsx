import { GET_ROOM, GET_ROOM_FAIL, GET_ROOM_SUCCEED } from "./action_types";

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
  addRoom: (data) => ({
    type: GET_ROOM,
    param: {
      data,
    },
  }),
  addRoomSucceed: (data) => ({
    type: GET_ROOM_SUCCEED,
    param: {
      data,
    },
  }),
  addRoomFail: (err) => ({
    type: GET_ROOM_FAIL,
    err,
  }),
};
