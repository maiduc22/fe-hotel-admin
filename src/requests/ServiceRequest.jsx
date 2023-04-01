import BaseRequest from "./BaseRequest";

const schema = "services";

export default class ServiceRequest extends BaseRequest {
  getService(param) {
    const url = `${schema}/`;
    return this.get(url, param);
  }

  createService(param) {
    const url = `${schema}/`;
    console.log(param.data);
    return this.post(url, param.data);
  }

  updateService(param) {
    console.log(param);
    const url = `${schema}/${param.data.id}`;
    return this.post(url, param.data.data);
  }

  inactiveService(param) {
    console.log(param);
    const url = `${schema}/${param.data}/in-active`;
    return this.post(url);
  }

  orderService(param) {
    console.log(param);
    const url = `${schema}/${param.data.bookingId}/order`;
    return this.post(url, param.data.body);
  }
}
