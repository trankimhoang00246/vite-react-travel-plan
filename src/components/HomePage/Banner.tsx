import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <div className="mt-8 text-[72px] font-bold text-second leading-[82px]">
            Discover the <br /> Best Travel
            <br /> Planing
          </div>
          <div className="mt-8 mb-10">
            Plan and look for your perfect trip with expert advice, travel tips,
            <br />
            destination information and inspiration from us.
          </div>
          <div>
            <Link to={"/plan"}>
              <Button
                size="large"
                className="text-main bg-white border-none shadow-xl"
                icon={<SearchOutlined />}
              >
                Start your trip
              </Button>
            </Link>
          </div>
        </Col>
        <Col span={12}>
          <img src="/banner.png" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
