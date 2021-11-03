import { Layout, Menu, Avatar } from 'antd';
import {
    UserOutlined,
    UploadOutlined,
    ShoppingCartOutlined,
    UnorderedListOutlined,
    ChromeOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import React from 'react';
import './option.css';
import Dashboard from '../contents/dashboard/Dashboard';
import Orders from '../contents/Orders/Orders';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const { Sider, Content } = Layout;

class Option extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }} >
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ backgroundColor: "#256bfe" }} >
                        <Avatar
                            size={64}
                            shape="square"
                            src="./images/logo.png"
                            style={{
                                marginTop: "50px",
                                marginBottom: "40px",
                            }}
                        />
                        <Menu style={{ backgroundColor: "#256bfe", color: "#fff" }} defaultSelectedKeys={['1']} >
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <Link to="/">
                                    Dashboard
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                                <Link to="/orders">
                                    Orders
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                                Import List
                            </Menu.Item>
                            <Menu.Item key="4" icon={<UploadOutlined />}>
                                Products Ecommenerce
                            </Menu.Item>
                            <Menu.Item key="5" icon={<ChromeOutlined />}>
                                Sites
                            </Menu.Item>
                            <Menu.Item key="6" icon={<SettingOutlined />}>
                                Setting
                            </Menu.Item>
                            <Menu.Item key="7" icon={<LogoutOutlined />}>
                                Log out
                            </Menu.Item>
                            <Menu.Item key="8" >
                                Version 0.1.1
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route exact path="/">
                                    <Dashboard toggle={this.toggle} collapsed={this.state.collapsed} />
                                </Route>
                                <Route path="/orders">
                                    <Orders toggle={this.toggle} collapsed={this.state.collapsed} />
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default Option;