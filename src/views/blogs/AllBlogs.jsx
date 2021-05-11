import React from 'react'
import {Row, Col,Typography, Divider, Button} from "antd"
import { PlusOutlined } from '@ant-design/icons'
import Post from '../../components/blog/Post'
import Data from "../../api/blogs"
import AddBlog from './AddBlog'

function AllBlogs() {
    const {Title} = Typography
    const [visible, setVisible] = React.useState(false)

    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Blogs</Title>
            </Col>
            <Col >
            <Button type="primary" size="large" onClick={()=> setVisible(true)} icon={<PlusOutlined />}>Add Blog</Button>
            </Col>
            <AddBlog visible={visible} onClose={() => setVisible(false)}/>
            <Divider />
        </Row>
        
        <Row gutter={16} wrap justify="start">
           
                {Data.map(post => {
                    const { title, image,authorImg,shortDescription, longDescription} = post
                    return(
                        <Post title={title} shortDescription={shortDescription} longDescription={longDescription} author={authorImg} img={image}/>
                    )
                })}
        
        
                {Data.map(post => {
                    const { title, image,authorImg,shortDescription,longDescription} = post
                    return(
                        <Post title={title} shortDescription={shortDescription} longDescription={longDescription} author={authorImg} img={image}/>
                    )
                })}
                {Data.map(post => {
                    const { title, image,authorImg,shortDescription,longDescription} = post
                    return(
                        <Post title={title} shortDescription={shortDescription} author={authorImg} longDescription={longDescription} img={image}/>
                    )
                })}
        </Row>
        </>
    )
}

export default AllBlogs
