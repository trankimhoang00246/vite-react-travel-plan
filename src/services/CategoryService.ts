import http from "../httpCommon";
import ICategory from "../types/ICategory";

// const getAllByCategoryName = (name: string) => {
//   return http.get<Array<ICategory>>(
//     `/category/category-child/name?name=${name}`
//   );
// };

const getAllByCategoryName = async (name: string) => {
  try {
    const data = await http.get<Array<ICategory>>(
      `/category/category-child/name?name=${name}`
    );
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

const CategoryService = {
  getAllByCategoryName,
};

export default CategoryService;
