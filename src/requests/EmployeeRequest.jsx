import BaseRequest from "./BaseRequest";

const schema = "users";

export default class EmployeeRequest extends BaseRequest {
  getEmployee() {
    const url = `${schema}`;
    console.log(url);
    return this.get(url);
  }

  updateEmployee(params) {
    console.log(params);
    const url = "";
    return this.post(url, params);
  }
}
