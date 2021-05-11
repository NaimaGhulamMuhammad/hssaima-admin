import React from 'react'
import { Col, Row, Typography, List, Divider, Form, Button, Select,Input } from 'antd'
import { CloseCircleTwoTone, EditOutlined } from '@ant-design/icons'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


function AddVariations () {
  const { Title } = Typography
  const [categories, setCategories] = React.useState([])
  const {Option} = Select
  const products = ["clothes", "bag", "Item1"]
  const [form] = Form.useForm()
  const onFinish = (values)=> {
    //values.parentCat ?
    console.log(values)
    setCategories([...categories, {parentCat:values.parentCat,category:[values.category]}])
    console.log(categories)

    //:
    //setCategories([...categories, {parentCat:values.parentCat,category:[values.category]}])
  }
  return (
    <>
      <Row gutter={16} justify='space-between' align='center'>
        <Col>
          <Title level={2}> Variations</Title>
        </Col>
        <Divider />
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <Form
            {...layout}
            form={form}
            name='basic'
            style={{ backgroundColor: 'white', padding: 15, height: 200 }}
            onFinish={onFinish}
          >
             <Form.Item name='product' label="Select product" rules={[{required:true,message:"Please Select Product Item"}]}>
            <Select
                style={{ width: '100%' }}
                allowClear
                placeholder='Select product Item'
                onChange={() => {}}
                size="large"
            >
                {products.map(option => <Option key={option}>{option}</Option>)}
              </Select>
            </Form.Item>
            <Form.Item name='variation' label="Variation" rules={[{required:true,message:"Please Select Variation"}]}>
            <Select
                style={{ width: '100%' }}
                allowClear
                placeholder='select variation'
                onChange={() => {}}
                size="large"
            >
                <Option key="size">Size</Option>
                <Option key="color">Color</Option>
            </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.variation !== currentValues.variation}
            >
                {({ getFieldValue }) =>{
                switch (getFieldValue('variation')) { 
                    case 'Color':
                    return(
                    <>
                    <Form.Item name="color" label="Set Color" rules={[{ required: true }]}>
                    <Select size="large" allowClear style={{width:"100%"}} placeholder="select Color">
                        <Option key="black">Black</Option>
                        <Option key="blue">blue</Option>
                        <Option key="white">white</Option>
                        <Option key="red">Red</Option>
                        <Option key="green">green</Option>
                    </Select>
                    </Form.Item>
                    </>
                ) 
                case 'Size' :
                    return(<></>)
                default: 
                return null
                }}
                }
            </Form.Item>
            <Form.Item {...tailLayout} >
              <Button type='primary' htmlType='submit'>
                Add
              </Button>
            </Form.Item>
          </Form>
        </Col>
        
      </Row>
    </>
  )
}

export default AddVariations
