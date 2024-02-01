import axios from "axios";

const baseURL = "http://localhost:8081/api/v1";
const token: string | null = localStorage.getItem("token");
const refreshToken: string | null = localStorage.getItem("refreshToken");

const http = axios.create({
  baseURL,
  timeout: 300000,
  headers: {
    "Content-type": "application/json",
    Authorization: token ? token : "",
    "X-Refresh-Token": refreshToken ? refreshToken : "",
  },
});

http.interceptors.request.use(
  function (config) {
    console.log(" Làm gì đó trước khi request dược gửi đi");
    return config;
  },
  function (error) {
    console.log(" Làm gì đó với lỗi request");
    return Promise.reject(error);
  }
);

// Thêm một bộ đón chặn response
http.interceptors.response.use(
  function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    console.log(" Làm gì đó với dữ liệu response");
    return response;
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    console.log(" Làm gì đó với lỗi response");
    return Promise.reject(error);
  }
);

export default http;
