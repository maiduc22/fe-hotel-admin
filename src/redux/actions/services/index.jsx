import {
  CREATE_SERVICE,
  CREATE_SERVICE_FAIL,
  CREATE_SERVICE_SUCCEED,
  GET_SERVICE,
  GET_SERVICE_FAIL,
  GET_SERVICE_SUCCEED,
  INACTIVE_SERVICE,
  INACTIVE_SERVICE_FAIL,
  INACTIVE_SERVICE_SUCCEED,
  ORDER_SERVICE,
  ORDER_SERVICE_FAIL,
  ORDER_SERVICE_SUCCEED,
  UPDATE_SERVICE,
  UPDATE_SERVICE_FAIL,
  UPDATE_SERVICE_SUCCEED,
} from "./action_type";

export default {
  getService: (data) => ({
    type: GET_SERVICE,
    params: {
      data,
    },
  }),
  getServiceSucceed: (data) => ({
    type: GET_SERVICE_SUCCEED,
    data,
  }),
  getServiceFail: (err) => ({
    type: GET_SERVICE_FAIL,
    err,
  }),

  createService: (data) => ({
    type: CREATE_SERVICE,
    params: {
      data,
    },
  }),
  createServiceSucceed: (data) => ({
    type: CREATE_SERVICE_SUCCEED,
    data,
  }),
  createServiceFail: (err) => ({
    type: CREATE_SERVICE_FAIL,
    err,
  }),

  updateService: (data) => ({
    type: UPDATE_SERVICE,
    params: {
      data,
    },
  }),
  updateServiceSucceed: (data) => ({
    type: UPDATE_SERVICE_SUCCEED,
    data,
  }),
  updateServiceFail: (err) => ({
    type: UPDATE_SERVICE_FAIL,
    err,
  }),

  orderService: (data) => ({
    type: ORDER_SERVICE,
    params: {
      data,
    },
  }),
  orderServiceSucceed: (data) => ({
    type: ORDER_SERVICE_SUCCEED,
    params: {
      data,
    },
  }),
  orderServiceFail: (err) => ({
    type: ORDER_SERVICE_FAIL,
    err,
  }),

  inactiveService: (data) => ({
    type: INACTIVE_SERVICE,
    params: {
      data,
    },
  }),
  inactiveServiceSucceed: (data) => ({
    type: INACTIVE_SERVICE_SUCCEED,
    data,
  }),
  inactiveServiceFail: (err) => ({
    type: INACTIVE_SERVICE_FAIL,
    err,
  }),
};
