import { UploadFile } from "antd";
import http from "../../configs/httpCommon";

const uploadImage = async (file: UploadFile) => {
  try {
    const formData = new FormData();
    if (file.originFileObj) {
      formData.append("image", file.originFileObj);
      const response = await http.post("/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = response.data;
      console.log(data);
      return data;
    }
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

const saveLink = async (name: string, url: string) => {
  try {
    const response = await http.post(`/links`, {
      name,
      url,
    });
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

const saveAddress = async (
  addressString: string,
  addressLinkMap: string,
  embeddedAddress: string
) => {
  try {
    const response = await http.post(`/address`, {
      addressString,
      addressLinkMap,
      embeddedAddress,
    });
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

const login = async (username: string, password: string) => {
  const response = await http.post(`/auth/login`, {
    username,
    password,
  });
  const data = response.data;
  return data;
};

const refreshToken = async (refreshToken: string) => {
  try {
    const response = await http.get(`/auth/refresh`, {
      headers: {
        "X-Refresh-Token": refreshToken,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

const apiService = {
  uploadImage,
  saveLink,
  saveAddress,
  login,
  refreshToken,
};

export default apiService;
