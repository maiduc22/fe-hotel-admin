import BaseRequest from "./BaseRequest";
import axios from "axios";
const schema = "auth";

export default class LoginRequest extends BaseRequest {
  register(params) {
    const url = `${schema}/register`;
    return this.post(url, params);
  }

  login(params) {
    const url = `${schema}/login`;
    return this.post(url, params);
  }
}
