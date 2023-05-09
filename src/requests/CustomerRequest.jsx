import BaseRequest from "./BaseRequest";

const schema = "";

export default class CustomerRequest extends BaseRequest {
  getCustomer() {
    const url = ``;
    return this.get(url);
  }
}
