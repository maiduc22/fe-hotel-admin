import { BASE_URL } from "../../consts";
import React from "react";
import { get } from "lodash";
import axios from "../axios";

export default class BaseRequest {
  version = "v1";

  prefix() {
    return "";
  }

  async get(url, params = {}) {
    try {
      const response = await axios.get(`${BASE_URL}/${this.version}/${url}`, {
        params,
      });
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async put(url, data = {}) {
    try {
      const response = await axios.put(
        `${BASE_URL}/${this.version}/${url}`,
        data
      );
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async post(url, data = {}) {
    try {
      const response = await axios.post(
        `${BASE_URL}/${this.version}/${url}`,
        data
      );
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async del(url, params = {}) {
    try {
      const response = await axios.delete(
        `${BASE_URL}/${this.version}/${url}`,
        params
      );
      return this._responseHandler(response);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async _responseHandler(response) {
    const { data } = response;
    let errorCode = window._.get(data, "error.code", 200);

    // if (errorCode >= 400) {
    //   let message = data.error.message;
    //   let errorsNode = undefined;

    //   if (typeof data.error.message === "string") {
    //     errorsNode = (
    //       <div style={{ fontWeight: "bold", color: "red" }}>
    //         {utils.upperCaseFirst(get(str, message) || message)}
    //       </div>
    //     );
    //   } else {
    //     errorsNode = window._.map(data.error.message, (message, field) => (
    //       <div style={{ fontWeight: "bold", color: "red" }} id={field}>
    //         {utils.upperCaseFirst(
    //           get(obj, message) ? get(obj, message) : `${field} ${message}`
    //         )}
    //       </div>
    //     ));
    //   }

    //   utils.showNotification(
    //     <span style={{ color: "red", fontWeight: "bold" }}>Lỗi</span>,
    //     errorsNode,
    //     consts.TYPE_ERROR
    //   );

    //   if (errorCode === 405) {
    //     window.h.push("/login");
    //     window.$dispatch({
    //       type: CLEAR_USER_DATA,
    //     });
    //   }
    //   throw "Request failed";
    // } else if (errorCode >= 300) {
    //   window.h.push("/");

    //   throw "UnAuthorization";
    // }

    return data;
  }

  _errorHandler(err) {
    if (err.response && err.response.status === 401) {
      // Unauthorized (session timeout)
      window.location.href = "/";
    }
    throw err;
  }

  getFile(url) {
    window.location.href = `${BASE_URL}/${API_VERSION}/${url}`;
  }
}
