import axios from "axios";
import { BASE_URL } from "./consts";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
