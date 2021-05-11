import React from 'react'
import Data from "../../api/coupons"
import {
  Table,
  Popconfirm,
  Row,
  Col,
  Typography,
  Divider,
  Button,Space, Descriptions
} from 'antd'
import {CloseCircleTwoTone, DoubleRightOutlined, EditOutlined, PlusOutlined} from "@ant-design/icons"
import AddCoupon from './AddCoupon'
import { Link } from 'react-router-dom'
import Modal from 'antd/lib/modal/Modal'
import ViewCoupon from './ViewCoupon'

function Coupons () {
    const [visible, setVisible] = React.useState(false)
    const [modal, setModal] = React.useState(false)
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
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      render: (value, record) => <Link to="/">{value}</Link>
    },
    {
      title: 'code',
      dataIndex: 'code',
      key: 'code',
      responsive: ['lg', 'md'],
      render: (value, record) => <span>${value}</span>
    },
    {
      title: 'product',
      dataIndex: 'product',
      key: 'product',
      
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
    },
    {
      title: 'View More',
      dataIndex: 'view more',
      responsive: ['lg', 'md'],
      render: (_, record) => Data.length >= 1 && <><Link to="/viewCoupon"><DoubleRightOutlined /></Link>
      </>
    }
  ]
  return (
    <>
      <Row gutter={16} justify='space-between' align='center'>
        <Col>
          <Title level={2}>Coupons</Title>
        </Col>
        <Col>
          <Button
            type='primary'
            size='large'
            onClick={() => setVisible(true)}
            icon={<PlusOutlined />}
          >
            Add Coupon
          </Button>
        </Col>
        <AddCoupon visible={visible} onClose={() => setVisible(false)} />
        <Divider />
      </Row>
      <Table columns={columns}  dataSource={Data} loading="false"/>
      
    </>
  )
}

export default Coupons
