import React from 'react'

function ViewHeader() {
    return (
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Our Team</Title>
            </Col>
            <Col >
            <Button type="primary" size="large" onClick={()=> setVisible(true)} icon={<PlusOutlined />}>Add Team Member</Button>
            </Col>
            <AddProduct visible={visible} onClose={() => setVisible(false)}/>
            <Divider />
        </Row>
    )
}

export default ViewHeader
