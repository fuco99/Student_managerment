import React, { Component } from 'react';
import { Modal, Button, DatePicker, Select } from 'antd';
import './ModalAdd.css';
import { FormProps, FormInstance } from 'antd/lib/form';
import { Form, Input, } from 'antd';
import { thisExpression } from '@babel/types';
import { IStudent } from '../Student';
import { classes, IClass } from '../Class';
import { teachers } from '../Teacher';
import { dataTeacherClass, TeacherClass } from '../TeacherClass';

const { RangePicker } = DatePicker;
const config = {
  rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
};

const { Option } = Select;
interface ModalEditProps extends FormProps {
 
}

interface ModalEditStates {
  isModalVisible: boolean,
  data: {},
  changed: boolean

}

export interface Resolver {
  changed: boolean, data: IStudent
}

interface ModalData extends IStudent{
  DatePicker:any;
}

class ModalEdit extends Component<ModalEditProps, ModalEditStates> {
  formRef: React.RefObject<FormInstance> = React.createRef();
  resolve!: (resolver: Resolver) => void;
  constructor(props: ModalEditProps) {
    super(props);
    this.state = {
      isModalVisible: false,
      data: {},
      changed: false
    }
  }

  showModal = async (toogle: boolean) => {
    return new Promise((resolve, reject) => {
      this.setState({ isModalVisible: toogle });
      this.resolve = resolve;
    });
  };

  saveItem = async () => {
    let dataInput = null;
    try {
      dataInput = (await this.formRef?.current?.validateFields()) as ModalData;
      dataInput.DateOfBirth = dataInput.DatePicker.format("DD/MM/YYYY");

      const resolver: Resolver = {
        changed: true,
        data: dataInput
      };
      this.resolve(resolver);

      this.setState({
        isModalVisible: false,

      })
      this.formRef.current?.resetFields()
    } catch (e) {

    }
  }
  
  handleCancel = () => {
    this.setState({
      isModalVisible: false
    })
  };

  render() {
    return (
      <>
        <Modal title="Thêm sinh viên" visible={this.state.isModalVisible} onOk={() => this.saveItem()} onCancel={() => this.handleCancel()}>
          <Form ref={this.formRef} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }} layout="horizontal">
            <Form.Item name='MSSV' label="MSSV" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="Name" label="Name" rules={[{ required: true }]} >
              <Input />
            </Form.Item>
            <Form.Item name="Gender" label="Gender" rules={[{ required: true }]} style={{ marginBottom: '10px' }}>
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item name="DatePicker" label="DatePicker" {...config} style={{marginBottom: "10px"}}>
              <DatePicker />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default ModalEdit;





