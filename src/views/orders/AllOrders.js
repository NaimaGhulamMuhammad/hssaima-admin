import React from 'react'
import { Table,Popconfirm,Row, Avatar,Col,Typography, Divider, Button, Image } from 'antd';
import { CloseCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Data from "../../api/Orders"
import img2 from "../../img/profile-5.png"
import ViewOrder from "./ViewOrder"
function Orders() {

    const {Title} = Typography
    const handleDelete = (key) => {
        // deleteTeamMember(key)
          Data = Data.filter((item) => item.id !== key);
        };

        const columns = [
            {
              title:"id",
              dataIndex:"id",
              key:'id'
            },
              {
                  title:"title",
                  dataIndex: 'title',
                  key:'title',
                  render: (value,record) => <Link>{value}</Link>
              },
              {
                title: 'client',
                dataIndex: 'client',
                key: 'client',
                responsive:['lg','md',],
                align:'center',
              },
              {
                title: 'status',
                dataIndex: 'status',
                key: 'status',
                responsive:['lg','md',],
                align:'center',
                filters: [
                {
                  text: 'deleivered',
                  value: 'deleivered'
                },
                {
                  text: 'pending',
                  value: 'pending'
                },
                {
                  text: 'cancelled',
                  value: 'cancelled'
                },
              ],
              // filterMultiple: false,
              onFilter: (value, record) => record.status.indexOf(value) === 0
              },
            {
              title: 'Actions',
              dataIndex:'actions',
              render: (_, record) =>
              Data.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                <CloseCircleTwoTone style={{fontSize:20}} /> 
                </Popconfirm>
                ) : null,
                  
              },
              {
                  title: 'View More',
                  dataIndex:'view more',
                  responsive:['lg','md',],
                  render: (_, record) =>
                    Data.length >= 1 && (<Link to="/ViewOrder"><Button type="primary">View more</Button></Link>) ,    
            },
            
            ];
    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Orders</Title>
            </Col>
            <Divider />
        </Row>
        <div>
            <Table columns={columns} className="table " dataSource={Data} loading="false"/>
        </div>
        {/* // View More Modal*/}
        
        </>
    )
}

export default Orders
