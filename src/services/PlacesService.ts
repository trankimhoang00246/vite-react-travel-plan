import http from "../httpCommon";

const getAllNotP = async () => {
  try {
    const data = await http.get<any>(`/places/get-all-not-p`);
    return data;
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

const save = async () => {
  try {
    const data = await http.get<any>(`/places/get-all-not-p`);
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

const PlacesService = {
  getAllNotP,
};

export default PlacesService;
