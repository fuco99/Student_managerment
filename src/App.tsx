import './App.css';
import 'antd/dist/antd.css';
import Header from './components/Header';
import FormSearch from './components/formSearch/FormSearch';
import React, { Component } from 'react';
import TableData from './components/tableData/TableData';
import './components/Class'
import './components/StudentClass'
import './components/Teacher'
import './components/TeacherClass'
import './components/Student'
import { StudentData, IStudent } from './components/Student';
import { classes, IClass } from './components/Class';
import { Iteacher, teachers } from './components/Teacher';
import { dataStudentClass, StudentClass } from './components/StudentClass';
import { dataTeacherClass } from './components/TeacherClass';
import { Col, Row } from 'antd';
import ModalAdd from './components/modalAdd/ModalAdd';

interface AppProps {
}

interface AppState {
  students: IStudent[],
  data : {},
  studentObj: {}
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      students: [],
      data : {},
      studentObj:{}
    }
  }

  load = () => {
   const students:IStudent [] = StudentData.map((item) => {
        const studentOfClass = dataStudentClass.filter((stcl) => {return item.MSSV === stcl.StudentId}).map((cl)=> cl.ClassId)
        const listClass = classes.filter(cl => {return studentOfClass.includes(cl.IdClass)})
        const teacherOfClass = dataTeacherClass.filter((tcl) => {return listClass.map((listCl) => listCl.IdClass).includes(tcl.ClassId) }).map((tcl) => tcl.TeacherId)
        const listTeacher = teachers.filter((tc) => {return teacherOfClass.includes(tc.MSGV)})

        item.Classes = listClass
        item.Teachers = listTeacher
        return item
    });
    this.setState({
      students
    })
  }

  componentDidMount() {
    this.load()
  }
  // tìm kiếm sinh viên theo tên
  search = (textSearch: string) => {
    var results: IStudent[] = [];
    if (textSearch) {
      this.state.students.forEach((student) => {
        if (student.Name.indexOf(textSearch) !== -1) {
          results.push(student);
        }
      });
      this.setState({
        students: results,
      });
    } else {
      this.load()
    }
  }

  // Xóa sinh viên 
  deleteStudent = (student: IStudent) => {
    const tempData = this.state.students.filter((e) => e.MSSV !== student.MSSV);
    this.setState({
      students: tempData,
    })
  }
  // Thêm sinh viên vào lớp
  getNewStudent = (idClass : string, idStudent : string) => {
    var itemStd: StudentClass = {
      StudentId: '',
      ClassId: ''
    };
    itemStd.StudentId = idStudent
    itemStd.ClassId = idClass

    var itemStudents = dataStudentClass;
    itemStudents.push(itemStd)
    console.log(itemStudents);
    
    
  }

  
  render() {
    const { students } = this.state 
    return (
      <div className="App">
        <Header />
        <FormSearch buttonSearch={(textSearch: string) => this.search(textSearch)} /> 
        { students.length > 0 && <TableData dataStd={students} deleteStudent={(student: IStudent) => this.deleteStudent(student)}
        addStd={(idClass : string, idStudent : string) => {this.getNewStudent(idClass,idStudent)}}/>}
        
      </div>
    );
  }
}

export default App;