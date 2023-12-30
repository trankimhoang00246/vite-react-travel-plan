import {
  DownOutlined,
  HeartOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown } from "antd";

const NavDropdown = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a rel="noopener noreferrer" href="#">
          User Information
        </a>
      ),
      icon: <InfoCircleOutlined />,
    },
    {
      key: "2",
      label: (
        <a rel="noopener noreferrer" href="#">
          Your Trip Cart
        </a>
      ),
      icon: <ShoppingCartOutlined />,
    },
    {
      key: "3",
      label: (
        <a rel="noopener noreferrer" href="#">
          Your Favourite
        </a>
      ),
      icon: <HeartOutlined />,
    },
    {
      key: "4",
      label: (
        <a rel="noopener noreferrer" href="#">
          Your History
        </a>
      ),
      icon: <HistoryOutlined />,
    },
    {
      key: "5",
      label: (
        <a rel="noopener noreferrer" href="#">
          Logout
        </a>
      ),
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <div className="flex items-center">
            <Avatar size="large" icon={<UserOutlined />} />
            <div className="mx-2">Tran Kim Hoang</div>
            <DownOutlined />
          </div>
        </a>
      </Dropdown>
    </div>
  );
};

export default NavDropdown;
