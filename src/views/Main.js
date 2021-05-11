import { Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
  const {Title} = Typography
  return (
  <>
  <Row gutter={16} justify='space-between' align='center'>
        <Col>
          <Title level={2}>Dashboard Home</Title>
        </Col>
        <Divider />
      </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Products" bordered={false}>
          <Link to="/products">Goto Products</Link>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Orders" bordered={false}>
          <Link to="/orders">Goto Orders</Link>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Coupons" bordered={false}>
          <Link to="/coupons">Goto Coupons</Link>
        </Card>
      </Col>
      <Divider />
      <Col span={8}>
        <Card title="Categories" bordered={false}>
          <Link to="/categories">Goto Categories</Link>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Brands" bordered={false}>
          <Link to="/brands">Goto Brands</Link>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Clients" bordered={false}>
          <Link to="/clients">View All Clients</Link>
        </Card>
      </Col>
      <Divider />
      <Col span={8}>
        <Card title="Reviews" bordered={false}>
          <Link to="/reviews">View All Clients</Link>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Manage profile" bordered={false}>
          <Link to="/profile">View All Clients</Link>
        </Card>
      </Col>
    </Row>
</> 
  );
};
export default Home;
