import BaseRequest from "./BaseRequest";

const schema = "rooms";

export default class RoomRequest extends BaseRequest {
  getRoom(params) {
    const url = `${schema}`;
    return this.get(url, params);
  }
  addRoom(params) {
    const url = `${schema}`;
    console.log(url);
    return this.post(url, params);
  }
}
