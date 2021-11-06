import React, { Component } from 'react';
import { Row, Col, Input, DatePicker, Button, Form, Select, FormInstance } from 'antd';
import './FormSearch.css';
import Search from 'antd/lib/input/Search';
import moment, { Moment } from 'moment';
import { RangeValue } from 'rc-picker/lib/interface';
const { RangePicker } = DatePicker;

interface FormSearchProps {
    buttonSearch: Function,
}

interface FormSearchStates {
    tempValue: string

}

class FormSearch extends Component<FormSearchProps, FormSearchStates> {

    constructor(props: FormSearchProps) {
        super(props);
        this.state = {
            tempValue: ''
        }
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({
            tempValue: e.currentTarget.value
        })
        this.props.buttonSearch(e.currentTarget.value)
    }
    onChangeDate=(value:RangeValue<any>)=>{
        const startDate = value?.[0];
        const endDate = value?.[0];
        console.log(startDate);
        console.log(endDate);
    }
    
    render() {
        return (
            <div>
                <Row>
                    <Col span={15}>
                        <Search
                            placeholder="input search text"
                            allowClear
                            type="primary"
                            size="large"
                            onSearch={(text: string) => this.props.buttonSearch(this.state.tempValue)}
                            onChange={(e) => this.onChange(e)}
                        />
                    </Col>
                    <Col span={8} style={{ display: "flex", marginLeft: "10px" }}>
                        <RangePicker ranges={{Today: [moment(), moment()],'This Month': [moment().startOf('month'), moment().endOf('month')],}}
                            showTime
                            format="YYYY/MM/DD"
                            onChange={this.onChangeDate}/>
                        <Button type="primary" onClick={() => {}}>Filter</Button>
                        <Button onClick={() => {}}>Reset</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FormSearch;