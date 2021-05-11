import { Drawer, Form, Button, Row, Col, Select,DatePicker } from 'antd'
import { PlusOutlined ,SortDescendingOutlined} from '@ant-design/icons'
import FormInput from '../../components/Input'
import React, { useState } from 'react'



const AddCoupon = ({ visible, onClose }) => {

  const [coupon, setCoupon] = useState({
    name: '',
    code: '',
    product: [''],
    productPrice: '',
    startDate: '',
    EndDate: ''
  })
 const {RangePicker} = DatePicker
  const catOpt = ['Product1', 'Product2', 'Product3', 'Product4']
  const { Option } = Select
  
  return (
    <Drawer
      title='Add New Coupon'
      width={720}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right'
          }}
        >
          <Button onClick={() => {}} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={() => {}} type='primary'>
            Add
          </Button>
        </div>
      }
    >
      <Form layout='vertical' hideRequiredMark>
        <Row gutter={16}>
          <FormInput
            name='name'
            half
            type='text'
            label='Name'
            placeholder='Write Coupon name'
            required
            message='Please Enter Coupon Title'
          />
          <FormInput
            name='code'
            half
            type='text'
            label='code'
            placeholder='Enter Code'
            required
            message='Please Enter Coupon Code'
          />
            <Col span={12}>
              <Select
                name='product'
                mode='multiple'
                style={{ width: '100%' }}
                allowClear
                placeholder='Select Product'
                onChange={() => {}}
                size="large"
              >
                {catOpt.map(option => <Option key={option}>{option}</Option>)}
              </Select>
            </Col>
          <FormInput
            name='product-price'
            type='number'
            label='Product price'
            placeholder='Enter Price'
            formatter="$"
            required
            message='Please Enter Product Price'
          />

          <Col span={24}>
            <RangePicker style={{width:"100%"}}/>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}
export default AddCoupon
