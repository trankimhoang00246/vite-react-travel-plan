import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-1 max-w-[600px]">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
