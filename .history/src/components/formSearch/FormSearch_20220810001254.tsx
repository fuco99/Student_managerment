import React, { Component } from 'react';
import { Row, Col, DatePicker, Button } from 'antd';
import './FormSearch.css';
import Search from 'antd/lib/input/Search';
import moment from 'moment';
import { RangeValue } from 'rc-picker/lib/interface';
const { RangePicker } = DatePicker;

interface FormSearchProps {
    buttonSearch: Function,
    buttonFilter: Function
}

interface FormSearchStates {
    tempValue: string,
    StartDate?: moment.Moment,
    EndDate?: moment.Moment

}

class FormSearch extends Component<FormSearchProps, FormSearchStates> {

    constructor(props: FormSearchProps) {
        super(props);
        this.state = {
            tempValue: '',
        }
    }
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({
            tempValue: e.currentTarget.value
        })
        this.props.buttonSearch(e.currentTarget.value)
    }
    onChangeDate = (value: RangeValue<any>) => {
        const startDate = (value?.[0])
        const endDate = (value?.[1])
        this.setState({
            StartDate: startDate,
            EndDate: endDate
        })
        this.props.buttonFilter(startDate, endDate)
    }

    render() {

        return (
            <div>
                <Row>
                    <Col span={15}>
                        <Search
                            placeholder="Input search text"
                            allowClear
                            size="large"
                            enterButton
                            onSearch={(text: string) => this.props.buttonSearch(this.state.tempValue)}
                            onChange={(e) => this.onChange(e)}
                        />
                    </Col>
                    <Col span={8} style={{ display: "flex", marginLeft: "10px" }}>
                        <RangePicker
                            format="YYYY/MM/DD"
                            onChange={this.onChangeDate}
                        />
                        <Button type="primary" onClick={() => this.props.buttonFilter(this.state.StartDate, this.state.EndDate)}>Filter</Button>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default FormSearch;