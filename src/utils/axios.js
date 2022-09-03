import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://sujonlwsserver.herokuapp.com",
  baseURL: "http://localhost:9000",
});

export default axiosInstance;
