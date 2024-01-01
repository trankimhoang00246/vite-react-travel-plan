import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center">
        <img src="/logo.svg" />
        <div className="ml-2 text-main font-medium">Travel Plan</div>
      </div>
    </Link>
  );
};

export default Logo;
