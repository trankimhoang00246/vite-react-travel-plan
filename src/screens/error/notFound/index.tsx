import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="text-6xl font-semibold">404</div>
      <div className="mt-2">
        <LoadingOutlined />
      </div>
      <h1 className="text-4xl m-4">This Page not found!</h1>
      <Link className="text-lg underline" to={"/"}>
        Return Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
