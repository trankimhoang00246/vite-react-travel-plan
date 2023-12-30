import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { Button } from "antd";
import NavDropdown from "./NavDropdown";

const Header = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="max-w-screen-xl m-auto h-[100px] flex justify-between items-center">
      <div className="mx-2 flex items-center">
        <Logo />
        <div className="ml-8">
          <Navbar />
        </div>
      </div>

      {login ? (
        <NavDropdown />
      ) : (
        <Button className="flex items-center text-main border-main mr-2">
          Log in now
          <img className="ml-1" src="/fly.svg" />
        </Button>
      )}
    </div>
  );
};

export default Header;
