import React from 'react'
import Data from "../../api/products"
import {
  Table,
  Popconfirm,
  Row,
  Avatar,
  Col,
  Typography,
  Divider,
  Button,Space, Image
} from 'antd'
import {CloseCircleTwoTone, EditOutlined, PlusOutlined} from "@ant-design/icons"
import AddProduct from './addProduct'
import { Link } from 'react-router-dom'

function Products () {
    const [visible, setVisible] = React.useState(false)
    const {Title} = Typography
    const handleDelete = () => {

    }
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
      render: (value, record) => <Link to="/">{value}</Link>
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      responsive: ['lg', 'md'],
      render: (value, record) => <span>${value}</span>
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
      filters: [
        {
          text: 'men fashion',
          value: 'men fashion'
        },
        {
          text: 'bags',
          value: 'bags'
        }
      ],
      // filterMultiple: false,
      onFilter: (value, record) => record.category.indexOf(value) === 0
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      responsive:['lg','md'],
      render: (_, record) =>
        Data.length >= 1 ? (
          <Space>
            <Popconfirm
              title='Sure to delete?'
              onConfirm={() => handleDelete(record.id)}
            >
              <CloseCircleTwoTone style={{ fontSize: 20 }} />
            </Popconfirm>
            <EditOutlined key='edit' style={{ fontSize: 20 }} />
          </Space>
        ) : null
    }
    // {
    //   title: 'View More',
    //   dataIndex: 'view more',
    //   responsive: ['lg', 'md'],
    //   render: (_, record) => Data.length >= 1 && <ViewPartner data={record} />
    // }
  ]
  return (
    <>
      <Row gutter={16} justify='space-between' align='center'>
        <Col>
          <Title level={2}> Products</Title>
        </Col>
        <Col>
          <Button
            type='primary'
            size='large'
            onClick={() => setVisible(true)}
            icon={<PlusOutlined />}
          >
            Add Product
          </Button>
        </Col>
        <AddProduct visible={visible} onClose={() => setVisible(false)} />
        <Divider />
      </Row>
      <Table columns={columns}  dataSource={Data} loading="false"/>

    </>
  )
}

export default Products
