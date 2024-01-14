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

const getPlaceDetails = async (id: string) => {
  try {
    const data = await http.get<any>(`/places/${id}`);
    return data;
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

const savePlaces = async (placeData: any) => {
  try {
    const response = await http.post(`/places`, placeData);
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

const PlacesService = {
  getAllNotP,
  savePlaces,
  getPlaceDetails,
};

export default PlacesService;
