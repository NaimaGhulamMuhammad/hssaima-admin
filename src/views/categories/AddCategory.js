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

const AddCategory = () => {

  return (
    <Form
      {...layout}
      name="basic"
      style={{backgroundColor:"white", padding:15, height:200}}
    >
    <FormInput name="category" label="Category Title" required message="Input category Title"/>      
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddCategory