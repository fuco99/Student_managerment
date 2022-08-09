import React, { Component } from 'react';
import { Table, Divider, Button, Popconfirm } from 'antd';
import './TableData.css'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { IStudent } from '../Student';
import ModalAdd, { Resolver } from '../modalAdd/ModalAdd';
import { thisExpression } from '@babel/types';


interface TableDataProps {
  dataStd: IStudent[];
  deleteStudent: Function,

}
interface TableDataState {
  items: IStudent[];


}

class TableData extends Component<TableDataProps, TableDataState> {
  modalRef: React.RefObject<ModalAdd> = React.createRef();
  constructor(props: TableDataProps) {
    super(props);
    this.state = {
      items: [],
    }
  }

  addItem = async () => {
    const { dataStd } = this.props;
    const resolver = await this.modalRef.current?.showModal(true,)

    const itemStudent = (resolver as Resolver).data
    itemStudent && dataStd.push(itemStudent);
    this.setState({
      items: dataStd
    })
    localStorage.setItem('studentData', JSON.stringify(this.state.items))
  }
  editItem = async (student: IStudent) => {
    const { dataStd } = this.props;
    const resolver = await this.modalRef.current?.showModal(true, student)
    if (resolver?.changed) {
      const newData = { ...resolver.data }
      console.log(newData.MSSV);
      student.MSSV = newData.MSSV as string
      student.Name = newData.Name as string
      student.Gender = newData.Gender as string
      student.DateOfBirth = newData.DateOfBirth as string
      student.Teacher = newData.Teacher as string
      student.ClassName = newData.ClassName as string

    }
    this.setState({
      items: dataStd
    })
    localStorage.setItem('studentData', JSON.stringify(this.state.items))
  }

  render() {
    const columns = [
      {
        title: 'MSSV',
        dataIndex: 'MSSV',
        key: 'MSSV',
      },
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
      },
      {
        title: 'Gender',
        dataIndex: 'Gender',
        key: 'Gender',
      },
      {
        title: 'Date of Birth',
        dataIndex: 'DateOfBirth',
        key: 'DateOfBirth',
      },
      {
        title: 'Class name',
        dataIndex: 'ClassName',
        key: 'className',
      },
      {
        title: 'Teacher',
        dataIndex: 'Teacher',
        key: 'teacher',
      },
      {
        title: 'Action',
        key: 'action',
        render: (record: IStudent) =>
          <span>
            <a style={{ color: "green" }} onClick={() => { this.editItem(record) }}><EditOutlined />Edit</a>
            <Divider type="vertical" />
            <Popconfirm placement="top" title="Are you sure to delete this student?" onConfirm={() => this.props.deleteStudent(record)}>
              <a style={{ color: "red" }}><DeleteOutlined />Delete</a>
            </Popconfirm>
          </span>
      }
    ]
    return (
      <>
        <div style={{ float: "right", marginRight: "44px", marginTop: "10px", display: "inline-block", }}>
          <Button type="primary" onClick={() => this.addItem()}>
            <PlusOutlined />
            Add student
          </Button>
        </div>
        <Table columns={columns} dataSource={[...this.props.dataStd]} />
        <ModalAdd ref={this.modalRef} dataStd={[...this.props.dataStd]} />
      </>
    );
  }
}

export default TableData;


