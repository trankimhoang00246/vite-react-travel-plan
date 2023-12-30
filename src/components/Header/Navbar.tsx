import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      label: <Link to={"#"}>Home</Link>,
      key: "home",
    },
    {
      label: <Link to={"/plan"}>Planning</Link>,
      key: "plan",
    },
    {
      label: <Link to={"/place"}>Place</Link>,
      key: "place",
    },
    {
      label: "Other",
      key: "other",
      children: [
        {
          label: <Link to={"/option-1"}>Option 1</Link>,
          key: "setting:1",
        },
        {
          label: <Link to={"/option-2"}>Option 2</Link>,
          key: "setting:2",
        },
      ],
    },
  ];

  return (
    <div>
      <Menu
        className="bg-third"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
    </div>
  );
};

export default Navbar;
