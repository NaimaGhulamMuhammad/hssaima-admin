import { Col, Descriptions, Divider, Typography, Row } from 'antd'
import React from 'react'

function ViewCoupon({visible, onOk, data}) {
    const {Title} = Typography
    const {name, code, product, productPrice, startDate, endDate} = data
    return (
        <>
         <Row gutter={16} justify='space-between' align='center'>
        <Col>
          <Title level={2}>Coupons Info</Title>
        </Col>
        <Divider />
      </Row>
      <Row gutter={16}>
          <Col span={24}>
          <Descriptions title="Coupon Info" layout="vertical">
            <Descriptions.Item label="Coupon Name">{name}</Descriptions.Item>
            <Descriptions.Item label="Coupon Code">{code}</Descriptions.Item>
            <Descriptions.Item label="Product">{product}</Descriptions.Item>
            <Descriptions.Item label="Product Price" span={2}>
            {productPrice}
            </Descriptions.Item>
            <Descriptions.Item label="Starting Date">{startDate}</Descriptions.Item>
            <Descriptions.Item label="Expiring Date">{endDate}</Descriptions.Item>
            </Descriptions>
          </Col>
      </Row>
        </>
    )
}

export default ViewCoupon
