import axios from "axios";

const baseURL = "http://localhost:8081/api/v1";
const token: string | null = localStorage.getItem("token");
const refreshToken: string | null = localStorage.getItem("refreshToken");

export default axios.create({
  baseURL,
  timeout: 300000,
  headers: {
    "Content-type": "application/json",
    Authorization: token ? token : "",
    "X-Refresh-Token": refreshToken ? refreshToken : "",
  },
});
