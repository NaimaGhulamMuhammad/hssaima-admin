import React from 'react'
import { Col, Row, Typography, List, Divider, Form, Button, Select,Input } from 'antd'
import AddCategory from './AddCategory'
import { CloseCircleTwoTone, EditOutlined } from '@ant-design/icons'
import FormInput from '../../components/Input'

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}

function Categories () {
  const { Title } = Typography
  const [categories, setCategories] = React.useState([])
  const [options, setOptions] = React.useState([])
  const {Option} = Select
  const [form] = Form.useForm()
  const onFinish = (values)=> {
    //values.parentCat ?
    console.log(values)
    setCategories([...categories, {parentCat:values.parentCat,category:[values.category]}])
    console.log(categories)
    categories.filter(data => data.parentCat == undefined && setOptions([...options, data.category[0]]))

    //:
    //setCategories([...categories, {parentCat:values.parentCat,category:[values.category]}])
  }
  return (
    <>
      <Row gutter={16} justify='space-between' align='center'>
        <Col>
          <Title level={2}> categories</Title>
        </Col>
        <Divider />
      </Row>
      <Row gutter={16}>
        <Col sp
        an={8}>
          <Form
            {...layout}
            form={form}
            name='basic'
            style={{ backgroundColor: 'white', padding: 15, height: 200 }}
            onFinish={onFinish}
          >
            {/* <FormInput
              name='category'
              label='Category Title'
              type='text'
              placeholder="category title"
              message='Input category Title'
              // onChange={(e) => setCategories({...categories, category:[...categories.category,e.target.value]})}
            /> */}
            <Form.Item name='category' label="Category Title" rules={[{required:true,message:"Please Enter category Title",},]}>
            <Input size="large" placeholder="category title"/>
            </Form.Item>
            <Form.Item name='parentCat' label="Parent Category" >
            <Select
                
                style={{ width: '100%' }}
                allowClear
                placeholder='leave if its not subcategory'
                onChange={() => {}}
                size="large"
               
                // onChange={(e)=> setCategories({...categories, parentCat:e.target.value})}
              >
                {options?.map(option => <Option key={option}>{option}</Option>)}
              </Select>
            </Form.Item>
            <Form.Item style={{margin:"10px"}}>
              <Button type='primary' htmlType='submit'>
                Add
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={14}>
          <List
            header={<Title level={4}>Avaialable categories</Title>}
            style={{ backgroundColor: 'white', padding: 15, }}
            dataSource={categories}
            title='available categories'
            renderItem={item => (
              <List.Item
                actions={[
                  <EditOutlined key='edit' />,
                  <CloseCircleTwoTone key='delete' />
                ]}
              >
              {item.parentCat ? <><List header={<h3>{item.parentCat}</h3>} style={{paddingLeft:20}} dataSource={item.category} renderItem={(item) => <List.Item actions={[
                  <EditOutlined key='edit' />,
                  <CloseCircleTwoTone key='delete' />
                ]}>{item}</List.Item> } /></> : <h3 level={4} style={{paddingLeft:20}}>{item.category}</h3>}
                {/* {item.category.length>1 ? <List /> : item.category[0]} */}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  )
}

export default Categories
