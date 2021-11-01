import React, { Component, useState } from 'react';
import { Table, Tag, Divider, Button, Spin, InputNumber, Input, Form } from 'antd';
import './TableData.css'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { IStudent } from '../Student';
import { classes, IClass } from '../Class';
import { Iteacher } from '../Teacher';
import ModalAdd, { Resolver } from '../modalAdd/ModalAdd';
import Item from 'antd/lib/list/Item';


interface TableDataProps {
  dataStd: IStudent[];
  deleteStudent: any,
  addStd: any,
 
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
    const resolver = await this.modalRef.current?.showModal(true);
    const itemStudent: IStudent  = (resolver as Resolver).data
    dataStd.push(itemStudent);
    this.setState({
      items:dataStd
    })
    console.log(dataStd);
  }
  

  editItem = async () => {
    const resolver = await this.modalRef.current?.showModal(true);
    
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
        title:'Class code',
        dataIndex:'Classes',
        key:'classCode',
        render: (classes: IClass[] )=> 
          <>
          {classes?.map(cl =>
            <Tag  >
              {cl.IdClass}
            </Tag>
          )}
          </>
      },
      {
        title:'Class name',
        dataIndex:'Classes',
        key:'className',
        render: (classes: IClass[] )=> 
          <>
          {classes?.map(cl =>
            <Tag color="blue" >
              {cl.className}
            </Tag>
          )}
          </>
      },
      {
        title:'Teachers',
        dataIndex:'Teachers',
        key:'teachers',
        render: (teachers: Iteacher[] )=> 
          <>
          {teachers?.map(teacher =>
            <Tag color="blue" >
              {teacher.teacherName}
            </Tag>
          )}
          </>
      },
      {
        title:'Action',
        key:'action',
        render:(record: IStudent) => 
            <span>
             <a style = {{color: "green"}} onClick ={() => this.editItem()}><EditOutlined />Edit</a>
              <Divider type="vertical" />
              <a style = {{color: "red"}} onClick = {() =>this.props.deleteStudent(record)} ><DeleteOutlined />Delete</a>
            </span>
      }
    ]
    return (
      <>
        <div style={{ float: "right", marginRight: "44px", marginTop: "10px", display: "inline-block", }}>
          <Button type="primary" onClick={() => this.addItem()}>
            Add
          </Button>
        </div>
        <Table columns={columns} dataSource={[...this.props.dataStd]} />

        <ModalAdd ref={this.modalRef}/>
      </>
    );
  }
}

export default TableData;




