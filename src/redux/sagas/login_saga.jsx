import { put, takeLatest, call, all, fork } from "redux-saga/effects";
import axios from "axios";

import actions from "../actions/login";
import rf from "../../requests/RequestFactory";

import {
  REGISTER,
  REGISTER_SUCCEED,
  REGISTER_FAIL,
  LOGIN_SUCCEED,
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/login/action_types";

function* register(action) {
  try {
    const { data } = yield call(
      (params) => rf.getRequest("LoginRequest").register(params),
      action.params
    );
    yield put(actions.registerSucceed(data));
  } catch (err) {
    console.log(err);
    yield put(actions.registerFail(err));
  }
}

function* login(action) {
  try {
    const { data } = yield call(
      (params) => rf.getRequest("LoginRequest").login(params),
      action.params.data
    );

    console.log("-----");

    yield put(actions.loginSucceed(data));
  } catch (err) {
    console.log(err);
    yield put(actions.logoutFail(err));
  }
}

function* watchAllUsers() {
  yield takeLatest(REGISTER, register);
  yield takeLatest(LOGIN, login);
}

export default function* rootSaga() {
  yield all([fork(watchAllUsers)]);
}
