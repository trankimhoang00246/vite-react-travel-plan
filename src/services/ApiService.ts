import http from "../httpCommon";
import ILinkForm from "../types/ILinkForm";

const saveLink = async (linkForm: ILinkForm) => {
  try {
    const data = await http.post<any>(`/links`, linkForm);
    return data;
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

const ApiService = { saveLink };

export default ApiService;
