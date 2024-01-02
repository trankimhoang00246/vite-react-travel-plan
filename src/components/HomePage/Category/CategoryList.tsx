import _ from "lodash";
import ICategory from "../../../types/ICategory";
import CategoryItem from "./CategoryItem";
import { useEffect, useState } from "react";

interface IProps {
  data: ICategory[];
  index: number;
}

const CategoryList = (props: IProps) => {
  const [data, setData] = useState<Array<ICategory>>([] || null);

  const sliceData = () => {
    setData(_.slice(props.data, props.index, props.index + 6));
  };

  useEffect(() => {
    console.log(props.data);
    sliceData();
    console.log(data);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        {data.map((item: ICategory) => (
          <CategoryItem key={item.id} category={item} />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
