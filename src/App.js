import React, { Component } from 'react';
import './App.css';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class App extends Component {
    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div  className="nav">
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>Login</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="idcard" />
                        <span>Person</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Books</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="pie-chart" /><span>Category</span></span>}>
                        <Menu.Item key="5">class one</Menu.Item>
                        <Menu.Item key="6">class two</Menu.Item>
                        <Menu.Item key="7">class three</Menu.Item>
                        <Menu.Item key="8">class four</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default App;
