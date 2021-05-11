import React from 'react'
import {Input, Col, Form, Select, InputNumber} from "antd"

function FormInput({textarea,name,label,placeholder,formatter,options, half,type, message,required, handleChange}) {
   
    return (
        <Col span={half? 12 : 24}>
            <Form.Item label={label} name={name}  rules={[{required:required,message:message,},]}>
            {textarea &&
            <Input.TextArea rows={4} placeholder={placeholder} />}
            {type==="text" && <Input size="large" placeholder={placeholder} allowClear/>}
            {/* {type==="select" && <Select mode="multiple"  placeholder={placeholder} onChange={handleChange}>
                <Option key="value1">Value1</Option>
            </Select>} */}
            {type==="number" && <InputNumber style={{ width: '100%' }}
                formatter={value => `${formatter? formatter: ''} ${value}`}
                onChange={handleChange} size="large"
             />}
            </Form.Item>
        </Col>
    )
}

export default FormInput
