import React, { Component } from 'react';
import { Modal, DatePicker, Select } from 'antd';
import './ModalAdd.css';
import { FormProps, FormInstance } from 'antd/lib/form';
import { Form, Input, } from 'antd';
import { IStudent } from '../Student';
import moment, { Moment } from 'moment';


const config = {
  rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
};

const { Option } = Select;
interface ModalEditProps {

}

interface ModalEditStates {
  isModalVisible: boolean,
  data: {},
  changed: boolean,
  isEdit?: boolean,
  student?: IStudent
}

export interface Resolver {
  changed: boolean,
  data?: IStudent,
}

export interface ModalData extends IStudent {
  DatePicker: Moment;
}


class ModalEdit extends Component<ModalEditProps, ModalEditStates> {
  formRef: React.RefObject<FormInstance> = React.createRef();
  resolver!: (resolver: Resolver) => void;
  constructor(props: ModalEditProps) {
    super(props);
    this.state = {
      isModalVisible: false,
      data: {},
      changed: false,
      isEdit: false
    }
  }

  showModal = async (toogle: boolean, student?: IStudent) => {
    //reset data
    await this.setState({ student: undefined, changed: false })
    return new Promise<Resolver>((resolve, reject) => {
      this.formRef?.current?.resetFields()
      this.setState({ isModalVisible: toogle });

      setTimeout(() => {
        this.formRef?.current?.setFieldsValue({ ...student, DatePicker: moment(student?.DateOfBirth, "MM/DD/YYYY") })
      })
      this.resolver = resolve;
    });
  };

  saveItem = async () => {
    let dataInput = null;
    try {
      dataInput = (await this.formRef?.current?.validateFields()) as ModalData;
      dataInput.DateOfBirth = dataInput.DatePicker.format("MM/DD/YYYY");
      this.formRef.current?.resetFields()
      await this.setState({ changed: true, student: dataInput })
      this.handleCancel()
    } catch (e) {

    }
  }

  handleCancel = () => {
    this.setState({
      isModalVisible: false
    })
    const resolver: Resolver = {
      changed: this.state.changed,
      data: this.state.student
    };
    this.resolver(resolver);

  };

  render() {
    console.log(this.state)
    return (
      <>
        <Modal title={this.state.student?.MSSV !== '' ? 'Thêm sinh viên' : "Cập nhật thông tin sinh viên"} visible={this.state.isModalVisible} onOk={() => this.saveItem()} onCancel={() => this.handleCancel()}>
          <Form ref={this.formRef} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }} layout="horizontal">
            <Form.Item name='MSSV' label="MSSV" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="Name" label="Name" rules={[{ required: true }]} >
              <Input />
            </Form.Item>
            <Form.Item name="Gender" label="Gender" rules={[{ required: true }]} style={{ marginBottom: '10px' }}>
              <Select
                placeholder="Select a option"
                allowClear
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item name="DatePicker" label="DateOfBirth" {...config} style={{ marginBottom: "10px" }}>
              <DatePicker />
            </Form.Item>
            <Form.Item name="ClassName" label="ClassName" rules={[{ required: true }]} >
              <Input />
            </Form.Item>
            <Form.Item name="Teacher" label="Teacher" rules={[{ required: true }]} >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default ModalEdit;





