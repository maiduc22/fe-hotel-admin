import LoginRequest from "./LoginRequest";
import RoomRequest from "./RoomRequest";
import BookingRequest from "./BookingRequest";
import ServiceRequest from "./ServiceRequest";
import StatisticRequest from "./StatisticRequest";

const requestMap = {
  LoginRequest,
  RoomRequest,
  BookingRequest,
  ServiceRequest,
  StatisticRequest,
};

const instances = {};

export default class RequestFactory {
  static getRequest(classname) {
    const RequestClass = requestMap[classname];
    if (!RequestClass) {
      throw new Error(`Invalid request class name: ${classname}`);
    }

    let requestInstance = instances[classname];
    if (!requestInstance) {
      requestInstance = new RequestClass();
      instances[classname] = requestInstance;
    }
    return requestInstance;
  }
}
