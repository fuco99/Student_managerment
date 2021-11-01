import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import ModalAdd from '../modalAdd/ModalAdd';
import './FormSearch.css';


const { Search } = Input;

interface FormSearchProps {
    buttonSearch:any,
}

interface FormSearchStates {
    tempValue:string,
}


class FormSearch extends Component<FormSearchProps,FormSearchStates> {
    
    constructor(props:FormSearchProps){
        super(props);
        this.state={
            tempValue:'',   
        }
    }
     
    onChange =(e:React.FormEvent<HTMLInputElement>):void =>{
        this.setState({
            tempValue: e.currentTarget.value
        })       
        this.props.buttonSearch(e.currentTarget.value) 
    }
    
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <Search
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={(text: string) => this.props.buttonSearch(this.state.tempValue)}
                            onChange = {(e) => this.onChange(e)}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FormSearch;