import React from "react";
import {Menu, Row, Col,Avatar,Space, Dropdown,Button} from "antd"
import {ArrowLeftOutlined, ArrowRightOutlined, CaretDownOutlined } from "@ant-design/icons"
import {Link} from "react-router-dom"
import userProfile from "../img/profile-1.png"
import {useHistory} from "react-router-dom"

const Navbar = ({collapsed, handleClick}) => {
const menu = (
    <Menu>
      <Menu.Item key="account" >
        <Link to="/"> Account</Link>
      </Menu.Item>
      <Menu.Item key="setting" >
        <Link to="/">Setting</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <Link to="/">Log out</Link>
      </Menu.Item>
    </Menu>
  );

  return (
	<Row align="center" justify="space-between">
    <Col span={2}>
      <Button type="link" onClick={handleClick} icon={collapsed?<ArrowRightOutlined />:<ArrowLeftOutlined />}></Button>
    </Col>
    <Col span={12}>
    <div style={{border:"2px solid black", height:50,margin:5, marginLeft:40}}></div>
    </Col>
    <Col span={4}>
      <Space >
        <Dropdown overlay={menu} placement="bottomLeft">
          <Link className="ant-dropdown-link">
          <Avatar src={userProfile} /><CaretDownOutlined />
          </Link>
        </Dropdown>
      </Space>
    </Col>
  </Row>
  );
};
export default Navbar;
