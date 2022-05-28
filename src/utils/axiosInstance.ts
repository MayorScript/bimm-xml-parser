import axios from "axios";
const config = require("../config");
const axiosInstance = axios.create({
  baseURL: config.xml.baseUrl,
  headers: {
    "Content-Type": "application/xml",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
