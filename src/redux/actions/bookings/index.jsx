import {
  BOOKING_APPROVE,
  BOOKING_APPROVE_FAIL,
  BOOKING_APPROVE_SUCCEED,
  BOOKING_CANCEL,
  BOOKING_CANCEL_FAIL,
  BOOKING_CHECKIN,
  BOOKING_CHECKIN_FAIL,
  GET_BOOKING,
  GET_BOOKING_FAIL,
  GET_BOOKING_SUCCEED,
} from "./action_type";

export default {
  getBooking: (data) => ({
    type: GET_BOOKING,
    param: {
      data,
    },
  }),
  getBookingSucceed: (data) => ({
    type: GET_BOOKING_SUCCEED,
    data,
  }),
  getBookingFail: (err) => ({
    type: GET_BOOKING_FAIL,
    err,
  }),

  approveBooking: (data) => ({
    type: BOOKING_APPROVE,
    params: {
      data,
    },
  }),
  approveBookingSucceed: (data) => ({
    type: BOOKING_APPROVE_SUCCEED,
    param: {
      data,
    },
  }),
  approveBookingFail: (err) => ({
    type: BOOKING_APPROVE_FAIL,
    err,
  }),

  cancelBooking: (data) => ({
    type: BOOKING_CANCEL,
    params: {
      data,
    },
  }),
  cancelBookingFail: (err) => ({
    type: BOOKING_CANCEL_FAIL,
    err,
  }),
  checkinBooking: (data) => ({
    type: BOOKING_CHECKIN,
    params: {
      data,
    },
  }),
  checkinBookingFail: (err) => ({
    type: BOOKING_CHECKIN_FAIL,
    err,
  }),
};
