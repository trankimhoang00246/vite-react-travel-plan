import http from "../../../httpCommon";
import ICategory from "./category.interface";

const getAllByCategoryName = async (name: string) => {
  try {
    const data = await http.get<Array<ICategory>>(
      `/category/category-child/name?name=${name}`
    );
    return data;
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

const CategoryService = {
  getAllByCategoryName,
};

export default CategoryService;
