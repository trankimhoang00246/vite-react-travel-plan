import { Form, notification as antdNotification } from "antd";
import { Link } from "react-router-dom";
import apiService from "../../../services/apis/apiService.api";
import LoginForm from "../../../components/loginForm/LoginForm";

const LoginFormUser = () => {
  const [notification, contextNotification] =
    antdNotification.useNotification();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    login(values.username, values.password);
  };

  const login = (username: string, password: string) => {
    apiService
      .login(username, password)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        localStorage.setItem("refreshToken", res.refreshToken);
        localStorage.setItem("username", res.username);

        window.location.href = "/admin/dashboard";
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          message: "Login failed",
          description: "Please check your username and password",
        });
      });
  };

  return (
    <div>
      {contextNotification}
      <div className="bg-white px-8 pt-6 pb-2 shadow-md rounded-lg">
        <div>
          Welcome back to{" "}
          <Link to={"/"}>
            <span className="text-second">TravelPlan</span>
          </Link>
        </div>
        <div className="text-2xl font-semibold mt-2 mb-6">Log in</div>

        <Form
          name="basic"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <LoginForm />
        </Form>
      </div>
    </div>
  );
};

export default LoginFormUser;
