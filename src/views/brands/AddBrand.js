import { Form,  Button } from 'antd';
import React from "react"
import FormInput from "../../components/Input"
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AddBrand = () => {

  return (
    <Form
      {...layout}
      name="basic"
      style={{backgroundColor:"white", padding:15, height:200}}
    >
    <FormInput name="brand" label="Brand Name" type="text" required message="Input brand name"/>      
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddBrand