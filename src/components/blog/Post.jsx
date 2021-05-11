import React from 'react'
import {Card, Avatar ,Row,Col, Modal, Typography, Divider} from "antd"
import {DeleteOutlined, DoubleRightOutlined, EditOutlined } from '@ant-design/icons';

function Post({img,author,title,shortDescription, longDescription}) {
    const [visible, setVisible] = React.useState(false)
    const {Meta} = Card
    const {Title} = Typography
    return (
        <>
        <Col xs={{span:12}} lg={{span:6}} md={{span:8}}>
        <Card
            style={{marginBottom:20}}
            cover={
                <img
                alt={title}
                src={img}
                height="150"/>
            }
            actions={[
                <DoubleRightOutlined key="view more" style={{fontSize:20}} onClick={() => setVisible(true)}/>,
                <EditOutlined key="edit" style={{fontSize:20}}/>,
                <DeleteOutlined key="delete" style={{fontSize:20}}/>,
            ]}
        >
            <Meta
                avatar={<Avatar src={author} />}
                title={title}
                description={shortDescription}
            />
        </Card>
        </Col>
        {/* // View More Modal*/}
        <Modal title={title} visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)} width={700} style={{top:20}}>
            <Row justify="center" gutter={16} style={{height:"30vh"}}>
                <Col span={24} ><img src={img} width="100%" height="50%"/></Col>
            </Row>
            <Row justify="space-around" align="top">
                <Col span={12} ><h1>{title}</h1></Col>
                <Col span={4}  ><Avatar src={author}/></Col>
                <Col span={4} ><h4>Category</h4></Col>
            </Row>
            <Divider orientation="left" />
            <Row justify="center" gutter={16}>
                <Col span={24} ><p style={{textAlign:"justify"}}>{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}</p></Col>
            </Row>
        </Modal>
        </>
    )
}

export default Post
