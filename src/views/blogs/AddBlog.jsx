import { SortDescendingOutlined } from "@ant-design/icons";
import {  Drawer, Form, Button, Row, Upload, Modal, Col } from "antd";
import {  PlusOutlined  } from "@ant-design/icons";
import FormInput from "../../components/Input"
import React, {useState} from "react"
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
}


const AddBlog = ({visible, onClose}) => {
    const [preview, setPreview] = useState({visible:false,title:'',img:''})
    const [editorState, setEditorState] = useState(()=>EditorState.createEmpty())
    const [post, setPost] = useState({title:'',image:'',shortDescription:'',longDescription:''})
    const onEditorStateChange = (e) => {
        setEditorState({e})
    }
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
          }
        setPreview({visible:true,title:file.name || file.url.substring(file.url.lastIndexOf('/') + 1),img:file.url || file.preview})
    }
    const handlePreviewChange = () => {

    }
    const handleCancel = () => {
        setPreview({...preview, visible:false})
    }
    return (
        <Drawer
          title="Add New Blog"
          width={720}
            onClose={onClose}
            visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={() => {}} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={()=>{}} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark >
            <Row gutter={16}>
              <FormInput name="title" type="text" label="Title" icon={<SortDescendingOutlined />} placeholder="Write Post Title" required message="Please Enter Post Title"/>
              <Col span={20}>
              <>
                <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                onPreview={handlePreview}
                onChange={handlePreviewChange}
                maxCount={1}
                >
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                </Upload>
                <Modal
                visible={preview.visible}
                title={preview.title}
                footer={null}
                onCancel={handleCancel}
                >
                <img alt="example" style={{ width: '100%' }} src={preview.img} />
                </Modal>
            </>
              </Col>
            </Row>
            <Row gutter={16}>
            <FormInput textarea name="shortDescrption" label="Short Description" placeholder="Write Post short Description" />
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Editor
                    //editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    wrapperStyle={{}}
                    editorStyle={{border:'solid #C0C0C0 1px',paddingLeft:10,height:270,}}
                    toolbarStyle={{}}
                    onEditorStateChange={onEditorStateChange}
                    />
                </Col>
            </Row>
          </Form>
        </Drawer>
    );
  }
export default AddBlog