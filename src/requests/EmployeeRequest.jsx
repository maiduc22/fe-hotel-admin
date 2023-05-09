import BaseRequest from "./BaseRequest";

const schema = "";

export default class EmployeeRequest extends BaseRequest {
  getEmployee() {
    const url = "";
    return this.get(url);
  }

  createEmployee(params) {
    const url = "";
    return this.post(url, params);
  }

  updateEmployee(params) {
    const url = "";
    return this.post(url, params);
  }
}
