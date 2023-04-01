import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import rf from "../../requests/RequestFactory";
import utils from "../../utils";
import actions from "../actions/bookings";
import {
  BOOKING_APPROVE,
  BOOKING_CANCEL,
  BOOKING_CHECKIN,
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
  } catch (err) {
    console.log(err);
    yield put(actions.approveBookingFail(err));
  }
}

function* checkinBooking(action) {
  try {
    yield call(
      (params) => rf.getRequest("BookingRequest").checkinBooking(params),
      action.params
    );
  } catch (err) {
    console.log(err);
    yield put(action.cancelBookingFail(err));
  }
}
function* watchBooking() {
  yield takeLatest(GET_BOOKING, getBooking);
  yield takeLatest(BOOKING_CANCEL, cancelBooking);
  yield takeLatest(BOOKING_APPROVE, approveBooking);
  yield takeLatest(BOOKING_CHECKIN, checkinBooking);
}

export default function* rootSaga() {
  yield all([fork(watchBooking)]);
}
