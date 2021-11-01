import React, { Component } from 'react';
import { Divider } from 'antd';

class Header extends Component {
    render() {
        return (
            <Divider style ={{fontSize : 48}}>
                <h2>Quản lý sinh viên</h2>
            </Divider>
        );
    }
}

export default Header;