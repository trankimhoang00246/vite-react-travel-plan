import { Menu, MenuProps } from "antd";

const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "Planning",
      key: "plan",
    },
    {
      label: "Place",
      key: "place",
    },
    {
      label: "Other",
      key: "other",
      children: [
        {
          label: "Option 1",
          key: "setting:1",
        },
        {
          label: "Option 2",
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
