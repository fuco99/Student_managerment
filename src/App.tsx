import './App.css';
import 'antd/dist/antd.css';
import Header from './components/Header';
import FormSearch from './components/formSearch/FormSearch';
import React from 'react';
import TableData from './components/tableData/TableData';
import './components/Student'
import { StudentData, IStudent } from './components/Student';
import moment from 'moment';

interface AppProps {
}

interface AppState {
  students: IStudent[],
  studentObj: {}
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      students: [],
      studentObj: {}
    }
  }
  componentWillMount() {
    if (localStorage.getItem('studentData') === null) {
      localStorage.setItem('studentData', JSON.stringify(StudentData));
    } else {
      localStorage.getItem('studentData')
    }
  }

  load = () => {
    const dt = localStorage.getItem('studentData') as string;
    const dataStorage = JSON.parse(dt)
    this.setState({
      students: dataStorage
    })

  }

  componentDidMount() {
    this.load()
  }

  // tìm kiếm sinh viên
  search = (textSearch: string) => {
    var results: IStudent[] = [];
    if (textSearch) {
      this.state.students.forEach((student) => {
        if (student.Name.indexOf(textSearch) !== -1) {
          results.push(student);
        }
        else if (student.MSSV.indexOf(textSearch) !== -1) {
          results.push(student)
        }
        else if (student.Gender.indexOf(textSearch) !== -1) {
          results.push(student)
        }
      });
      this.setState({
        students: results,
      });
    } else {
      this.load()

    }
  }
  searchByDate = (startDate: moment.Moment, endDate: moment.Moment) => {
    var results: IStudent[] = [];
    if(startDate != undefined && endDate != undefined){
      this.state.students.forEach((student) => {
      const compairDate = moment(student.DateOfBirth)
      if (compairDate.isBetween(startDate, endDate)) {
        results.push(student)
      }
      })
      this.setState({
        students: results
      })
    }else{
      this.load()
    }
    
  }
  // Xóa sinh viên 
  deleteStudent = (student: IStudent) => {
    const tempData = this.state.students.filter((e) => e.MSSV !== student.MSSV);
    localStorage.setItem('studentData', JSON.stringify(tempData))

    this.setState({
      students: tempData
    })
  }
  render() {

    const { students } = this.state

    return (
      <div className="App">
        <Header />
        <FormSearch buttonSearch={(textSearch: string) => this.search(textSearch)} buttonFilter={(startDate: moment.Moment, endDate: moment.Moment) => { this.searchByDate(startDate, endDate) }} />
        {students.length > 0 && <TableData dataStd={students} deleteStudent={(student: IStudent) => this.deleteStudent(student)} />}
      </div>
    );
  }
}

export default App;


