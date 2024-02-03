import LoginFormUser from "./components/LoginFormUser";

const LoginUserPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-1 max-w-[600px]">
        <LoginFormUser />
      </div>
    </div>
  );
};

export default LoginUserPage;
