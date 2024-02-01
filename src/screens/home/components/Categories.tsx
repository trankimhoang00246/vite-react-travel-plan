import {
  LeftOutlined,
  LoadingOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import CategoryList from "./CategoryList";
import { useEffect, useState } from "react";
import CategoryService from "../../../services/apis/category/category.api";
import ICategory from "../../../types/ICategory";

const Categories = () => {
  const [index, setIndex] = useState(1);
  const [categoriesData, setCategoriesData] = useState<Array<ICategory>>([]);

  const nextSlide = () => {
    setIndex(index + 1);
  };

  const prevSlide = () => {
    setIndex(index - 1);
  };

  const getAllByCategoryName = () => {
    CategoryService.getAllByCategoryName("area")
      .then((res) => {
        setCategoriesData(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllByCategoryName();
  }, []);

  return (
    <div>
      <div className="my-12 flex justify-between items-center">
        <div className="max-w-[500px]">
          <div className="text-[40px] text-second font-medium">Categories</div>
          <div>
            Here are lots of interesting destinations to visit, but don’t be
            confused—they’re already grouped by category.
          </div>
        </div>

        <div>
          <Button shape="circle" size="large" icon={<LeftOutlined />}></Button>
          <Button
            className="m-2"
            size="large"
            shape="circle"
            icon={<RightOutlined />}
          ></Button>
        </div>
      </div>
      {categoriesData.length !== 0 ? (
        <CategoryList data={categoriesData} index={index} />
      ) : (
        <div>
          Loading <LoadingOutlined />
        </div>
      )}
    </div>
  );
};

export default Categories;
