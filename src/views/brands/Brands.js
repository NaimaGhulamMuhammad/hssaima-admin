import React from 'react'
import { Col, Row, Typography, List, Divider } from 'antd'
import AddBrand from './AddBrand'
import { CloseCircleTwoTone, EditOutlined } from '@ant-design/icons';

function Brands() {
    const {Title} = Typography;
    const brands = ['brand1', 'brand2', 'brand3']
    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
        <Col >
        <Title level={2}> Brands</Title>
        </Col>
        <Divider />
        </Row>
        <Row gutter={16}>
            <Col span={8} >
                <AddBrand />
            </Col>
            <Col span={16} >
                <List
                header={<Title level={4}>Avaialable Brands</Title>}
                style={{backgroundColor:"white", padding:15, height:500}}
                dataSource={brands} 
                title="available Brands"
                renderItem={(item)=><List.Item actions={[<EditOutlined key="edit"/>, <CloseCircleTwoTone key="delete"/>]}>{item}</List.Item>}
               />
            </Col>
        </Row>
        </>
    )
}

export default Brands
