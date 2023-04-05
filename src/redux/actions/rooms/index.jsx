import {
  ADD_ROOM,
  ADD_ROOM_FAIL,
  ADD_ROOM_SUCCEED,
  BLOCK_ROOM,
  BLOCK_ROOM_FAIL,
  GET_ROOM,
  GET_ROOM_FAIL,
  GET_ROOM_SUCCEED,
  UPDATE_ROOM,
  UPDATE_ROOM_FAIL,
  UPDATE_ROOM_SUCCEED,
} from "./action_types";

export default {
  getRoom: (data) => ({
    type: GET_ROOM,
    params: {
      data,
    },
  }),
  getRoomSucceed: (data) => ({
    type: GET_ROOM_SUCCEED,
    data,
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

  udpateRoom: (params) => ({
    type: UPDATE_ROOM,
    params,
  }),
  udpateRoomSucceed: (data) => ({
    type: UPDATE_ROOM_SUCCEED,
    data,
  }),
  udpateRoomFail: (err) => ({
    type: UPDATE_ROOM_FAIL,
    err,
  }),

  blockRoom: (params) => ({
    type: BLOCK_ROOM,
    params,
  }),
  blockRoomFail: (err) => ({
    type: BLOCK_ROOM_FAIL,
    err,
  }),
};
