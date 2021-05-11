import React from 'react'
import { Table,Popconfirm,Row, Avatar,Col,Typography, Divider, Button, Image } from 'antd';
import { CloseCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Data from "../../api/Clients"
import ViewClient from './ViewClient';
import img2 from "../../img/profile-5.png"

function Clients() {

    const {Title} = Typography
    const [visible, setVisible] = React.useState(false)

    const handleDelete = (key) => {
        // deleteTeamMember(key)
          Data = Data.filter((item) => item.id !== key);
        };

              const columns = [
                {
                    title:"name",
                    dataIndex:"name",
                    key:"name"
                },
              {
                  title:"Profile",
                  dataIndex: 'profile',
                  key:'profile',
                  render: (value,record) => <Avatar src={value} />
              },
              {
                title: 'email',
                dataIndex: 'email',
                key: 'email',
                responsive:['lg','md',],
                align:'center',
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
                    Data.length >= 1 && ( <Link to="/viewClient"><Button type="primary">View More</Button></Link>) ,    
            },
            
            ];
    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Our Clients</Title>
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

export default Clients
