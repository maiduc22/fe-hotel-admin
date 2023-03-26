import { all } from "redux-saga/effects";
import watchAllUsers from "./login_saga";

function* rootSaga() {
  yield all([watchAllUsers()]);
}

export default rootSaga;
