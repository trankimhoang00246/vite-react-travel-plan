import LoginFormAdmin from "./components/LoginFormAdmin";

const LoginAdminPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[url('/background-image-admin-login.png')]">
      <div className="flex-1 max-w-[600px]">
        <LoginFormAdmin />
      </div>
    </div>
  );
};

export default LoginAdminPage;
