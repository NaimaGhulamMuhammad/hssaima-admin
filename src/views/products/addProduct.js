import { SortDescendingOutlined } from '@ant-design/icons'
import { Drawer, Form, Button, Row, Upload, Modal, Col, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import FormInput from '../../components/Input'
import MySelect from '../../components/Input'
import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const AddProduct = ({ visible, onClose }) => {
  const [preview, setPreview] = useState({ visible: false, title: '', img: '' })
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const [product, setProduct] = useState({
    title: '',
    price: '',
    image: [''],
    description: '',
    quantity: '',
    brand: '',
    category: ''
  })
  const onEditorStateChange = e => {
    setEditorState({ e })
  }

  const catOpt = ['category1', 'category2', 'category3', 'category4']
  const brandOpt = ['brand1', 'brand2', 'brand3', 'brand4']
  const { Option } = Select
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreview({
      visible: true,
      title: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      img: file.url || file.preview
    })
  }
  const handlePreviewChange = () => {}
  const handleCancel = () => {
    setPreview({ ...preview, visible: false })
  }
  return (
    <Drawer
      title='Add New Team Member'
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
            Submit
          </Button>
        </div>
      }
    >
      <Form layout='vertical' hideRequiredMark>
        <Row gutter={16}>
          <FormInput
            name='title'
            half
            type='text'
            label='Title'
            placeholder='Write Product Title'
            required
            message='Please Enter Product Title'
          />
          <FormInput
            name='price'
            half
            type='number'
            label='Price'
            formatter='$'
            placeholder='Enter Price'
            required
            message='Please Enter Price'
          />
            <Col span={12}>
              <Select
                name='category'
                mode='multiple'
                style={{ width: '100%' }}
                allowClear
                placeholder='Select Category'
                onChange={() => {}}
                size="large"
              >
                {catOpt.map(option => <Option key={option}>{option}</Option>)}
              </Select>
            </Col>
            <Col span={12}>
              <Select
                name='brand'
                mode='multiple'
                style={{ width: '100%' }}
                allowClear
                placeholder='Select Brand'
                onChange={() => {}}
                size="large"
              >
                {brandOpt.map(option => <Option key={option}>{option}</Option>)}
              </Select>
            </Col>
          <FormInput
            name='quantity'
            type='number'
            label='Quantity'
            placeholder='Enter Quantity'
            required
            message='Please Enter Quantity'
          />

          <Col span={24}>
            <>
              <Upload
                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                listType='picture-card'
                onPreview={handlePreview}
                onChange={handlePreviewChange}
                maxCount={7}
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload Product Images</div>
                </div>
              </Upload>
              <Modal
                visible={preview.visible}
                title={preview.title}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt='example'
                  style={{ width: '100%' }}
                  src={preview.img}
                />
              </Modal>
            </>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <label> Description</label>
            <Editor
              //editorState={editorState}
              toolbarClassName='toolbarClassName'
              wrapperClassName='wrapperClassName'
              editorClassName='editorClassName'
              wrapperStyle={{}}
              editorStyle={{
                border: 'solid #C0C0C0 1px',
                paddingLeft: 10,
                height: 270
              }}
              toolbarStyle={{}}
              onEditorStateChange={onEditorStateChange}
            />
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}
export default AddProduct
