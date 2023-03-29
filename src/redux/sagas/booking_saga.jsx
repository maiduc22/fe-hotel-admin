import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import rf from "../../requests/RequestFactory";
import utils from "../../utils";
import actions from "../actions/bookings";
import {
  BOOKING_APPROVE,
  BOOKING_CANCEL,
  GET_BOOKING,
} from "../actions/bookings/action_type";

function* getBooking(action) {
  try {
    const { data } = yield call(
      (params) => rf.getRequest("BookingRequest").getBooking(params),
      action.params
    );
    yield put(actions.getBookingSucceed(data.data));
  } catch (err) {
    console.log(err);
    yield put(actions.getBookingFail(err));
  }
}

function* cancelBooking(action) {
  try {
    yield call(
      (params) => rf.getRequest("BookingRequest").cancelBooking(params),
      action.params
    );
    utils.showNotification(
      "Success",
      "Cancel the booking successfully",
      "success"
    );
  } catch (err) {
    console.log(err);
    yield put(actions.cancelBookingFail(err));
  }
}

function* approveBooking(action) {
  try {
    yield call(
      (params) => rf.getRequest("BookingRequest").approveBooking(params),
      action.params
    );
    utils.showNotification(
      "Success",
      "Approve the booking successfully",
      "success"
    );
  } catch (err) {
    console.log(err);
    yield put(actions.approveBookingFail(err));
  }
}

function* watchBooking() {
  yield takeLatest(GET_BOOKING, getBooking);
  yield takeLatest(BOOKING_CANCEL, cancelBooking);
  yield takeLatest(BOOKING_APPROVE, approveBooking);
}

export default function* rootSaga() {
  yield all([fork(watchBooking)]);
}
