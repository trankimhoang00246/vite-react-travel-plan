import { Link } from "react-router-dom";
import ICategory from "../../../types/ICategory";

interface IProps {
  category: ICategory;
}

const CategoryItem = (props: IProps) => {
  return (
    <div className="m-2">
      <Link className=" w-[200px] grid justify-center" to={"category"}>
        <div className="w-[200px] h-[300px] overflow-hidden">
          <img
            className="h-full
            w-auto
            rounded-tl-[100px] 
            rounded-tr-[100px] 
            rounded-br-[100px] 
            rounded-bl-[100px]"
            src={props.category.imageCategory}
          />
        </div>
        <div className="pt-2 m-auto">{props.category.name}</div>
      </Link>
    </div>
  );
};

export default CategoryItem;
