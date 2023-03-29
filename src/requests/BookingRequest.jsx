import BaseRequest from "./BaseRequest";

const schema = "rooms";

export default class BookingRequest extends BaseRequest {
  getBooking(param) {
    const url = `${schema}/bookings`;
    return this.get(url, param);
  }
  approveBooking(param) {
    console.log(param.data);
    const url = `${schema}/${param.data}/approve`;
    return this.get(url);
  }
  cancelBooking(param) {
    console.log(param.data);
    const url = `${schema}/${param.data}/cancel`;
    return this.get(url);
  }
  checkinBooking(param) {
    const url = `${schema}/${param.data}/checkin`;
    return this.get(url);
  }
}