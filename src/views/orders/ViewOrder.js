import { Col, Divider, Row, Typography } from 'antd'
import React from 'react'

function ViewOrder() {
    const {Title} = Typography
    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
        <Col >
        <Title level={2}> Detailed Order</Title>
        </Col>
        <Divider />
        </Row>
        </>
    )
}

export default ViewOrder
