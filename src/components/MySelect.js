import React from 'react'
import { Select, Col } from "antd";

const MySelect = ({mode,options,half,name, placeholder}) => {
    const {Option} = Select
    const children = [];
    options.map(option => 
        children.push(<Option key={option}>{option}</Option>)
    )
    console.log("children")
//     for (let i = 0; i < options.length; i++) {
//         console.log(options[i])
// //   children.push(<Option key={options[i]}>{options[i]}</Option>);
//     }
    return (
        <Col span={half?12:24}>
            <Select name={name} mode={mode} style={{ width: '100%' }} allowClear placeholder={placeholder} onChange={()=> {}}>
                {children}
            </Select>
        </Col>
    )
}

export default MySelect
