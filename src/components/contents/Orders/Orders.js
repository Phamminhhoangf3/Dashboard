import React from 'react';
import {
    Row,
    Col,
    Avatar,
    Button,
    Typography,
    Space,
    Badge,
    Input,
    Select,
    Tabs
} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ChromeOutlined,
    PlusCircleOutlined,
    BellOutlined,
    ReloadOutlined,
} from '@ant-design/icons';
import './orders.css';
import TableAll from './TableAll'

const { Title } = Typography;

class Orders extends React.PureComponent {
    
    render() {
        const { toggle, collapsed } = this.props;
        const { Option } = Select;
        const selectAfter = (
            <Select defaultValue="name-order" className="select-after" type="primary">
                <Option value="name-order">Name order</Option>
                <Option value="">Addres customer</Option>
                <Option value="">Phone customer</Option>
                <Option value="">Country customer</Option>
                <Option value="">Name product</Option>
                <Option value="">Sku product</Option>
                <Option value="">SKU custom</Option>
            </Select>
        );
        const selectTime = (
            <Select className="select-after" >
                <Option value="">Apptest10xdrop111.myshopify.com</Option>
                <Option value="">Apptest10xdrop112.myshopify.com</Option>
                <Option value="">Apptest10xdrop112.myshopify.com</Option>
            </Select>
        );
        const { TabPane } = Tabs;
        function callback(key) {
            console.log(key);
        }
        return (
            <div className="container">
                <Row style={{ justifyContent: 'space-between', }}>
                    <Col style={{}}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Col>
                    <Space >
                        <Button type="primary" icon={<ChromeOutlined />} style={{ borderRadius: "15px", backgroundColor: "#223B4F" }}>
                            Tool Drop Coming Soon
                        </Button>
                        <Button type="primary" icon={<PlusCircleOutlined />} style={{ borderRadius: "15px", backgroundColor: "#223B4F" }}>
                            Link to AliEpress
                        </Button>
                        <Badge size="small" count={1} offset={[-8, 10]}>
                            <Button type="text" icon={<BellOutlined />} style={{ color: "#f5be00" }} />
                        </Badge>
                        <Avatar size={30} src="./images/avatar/avataruser.png" />
                        <Title style={{ fontSize: "11px" }}>User01_10xdrop</Title>
                    </Space>
                </Row>
                <Row>
                    <div className="title">
                        <Title>Oder Manager</Title>
                    </div>
                </Row>
                <Row style={{ margin: "0 -15px" }}>
                    <Col span={8} style={{ padding: "0 15px" }}>
                        <Title style={{ fontSize: "16px", float: "left" }}>Search orders by options</Title>
                        <Input addonAfter={selectAfter} defaultValue="Search by" style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} />
                    </Col>
                    <Col span={8} style={{ padding: "0 15px" }}>
                        <Title style={{ fontSize: "16px", float: "left" }}>Filter by time</Title>
                        <Input defaultValue="Choose time" style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/>
                    </Col>
                    <Col span={8} style={{ padding: "0 15px" }}>
                        <Title style={{ fontSize: "16px", float: "left" }}>Filter by site</Title>
                        <Input addonAfter={selectTime} defaultValue="Choose site" style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/>
                    </Col>
                </Row>
                <Row>
                    <div className="reload">
                        <Button type="primary" style={{ borderRadius: "5px", backgroundColor: "#256BFE" }} icon={<ReloadOutlined />}>Reload Orders</Button>
                    </div>
                </Row>
                <Row>
                    <Tabs defaultActiveKey="1" onChange={callback} >
                        <TabPane tab="All" key="1">
                            <TableAll />
                        </TabPane>
                        <TabPane tab="Need pay" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Paid" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Parital Fullfill" key="4">
                            Content of Tab Pane 4
                        </TabPane>
                        <TabPane tab="Sipped" key="5">
                            Content of Tab Pane 5
                        </TabPane>
                    </Tabs>
                </Row>
            </div>
        );
    }
}

export default Orders;