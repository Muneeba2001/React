import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export default AxiosInstance;
