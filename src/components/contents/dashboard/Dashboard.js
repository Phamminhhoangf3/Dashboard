import React from 'react';
import {
    Row,
    Col,
    List,
    Avatar,
    Button,
    Typography,
    Tag,
    Space,
    Badge
} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ShoppingCartOutlined,
    MoneyCollectOutlined,
    WalletOutlined,
    ExclamationCircleOutlined,
    ChromeOutlined,
    PlusCircleOutlined,
    BellOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
import { Line } from 'react-chartjs-2';

const { Title } = Typography;
const data = [
    {
        title: 'Total Orders',
        icon: <ShoppingCartOutlined />,
        total: 1,
    },
    {
        title: 'Total product',
        icon: <ShoppingCartOutlined />,
        total: 11,
    },
    {
        title: 'Revenue',
        icon: <MoneyCollectOutlined />,
        Revenue: 1,
    },
    {
        title: 'Profit',
        icon: <WalletOutlined />,
        Profit: 2,
    },
];
const bestProduct = [
    {
        title: 'Aiersi full 21 inch ukulele',
        img: './images/best/produc1.png',
        price: '$61.9',
        quantity: 1126
    },
    {
        title: 'Women\'s Clovia Cotton..',
        img: './images/best/produc2.png',
        price: '$61.9',
        quantity: 1119
    },
    {
        title: 'Anti Scrape Furniture Le..',
        img: './images/best/produc3.png',
        price: '$61.9',
        quantity: 1000
    },
    {
        title: 'Flower Serving Box',
        img: './images/best/produc4.png',
        price: '$61.9',
        quantity: 947
    },
    {
        title: 'Sensitive Skin Cream wi...',
        img: './images/best/produc5.png',
        price: '$61.9',
        quantity: 940
    },
    {
        title: 'Space Hero Rain Boots',
        img: './images/best/produc6.png',
        price: '$61.9',
        quantity: 790
    },
    {
        title: 'Toddler Tiger Onesie',
        img: './images/best/produc7.png',
        price: '$61.9',
        quantity: 695
    },
    {
        title: 'Baby Girl Rompers And..',
        img: './images/best/produc8.png',
        price: '$61.9',
        quantity: 405
    },
    {
        title: 'Cute Reusable Coffee Cup',
        img: './images/best/produc9.png',
        price: '$61.9',
        quantity: 189
    },
];
const dataChart = {
    labels: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

class Dashboard extends React.PureComponent {

    render() {
        const { toggle, collapsed } = this.props;
        return (
            <>
                <Row style={{ justifyContent: 'space-between', margin: "0 10px" }}>
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
                    <Col span={18}>
                        <div className="report">
                            <Title style={{ fontSize: "18px", textAlign: "left", marginLeft: "10px" }}>
                                Report overview
                            </Title>
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                style={{ width: '100%' }}
                                renderItem={item => (
                                    <List.Item
                                        style={{
                                            display: 'flex',
                                            padding: "10px"
                                        }}
                                    >
                                        <Space>
                                            <Avatar
                                                icon={item.icon}
                                                style={{ backgroundColor: '#256bfe' }}
                                            />
                                            <Title
                                                style={{ fontSize: "16px", margin: "auto 0" }}
                                            >
                                                {item.title}
                                            </Title>
                                            <Button type="text" shape="circle" icon={<ExclamationCircleOutlined />} />
                                        </Space>
                                        <div style={{ color: "#256BFE", fontWeight: 700 }}>{item.total || item.Profit || item.Revenue}</div>
                                    </List.Item>
                                )}
                            />
                        </div>
                        <div className="chart">
                            <Title style={{ fontSize: "18px", textAlign: "left", marginLeft: "10px" }}>
                                Revenue / Profit (2021)
                            </Title>
                            <Line data={dataChart} options={options} />
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="best-product">
                            <List
                                itemLayout="horizontal"
                                dataSource={bestProduct}
                                renderItem={item => (
                                    <List.Item
                                        style={{
                                            justifyContent: "flex-start",
                                            padding: "6px"
                                        }}
                                    >
                                        <Avatar src={item.img} />
                                        <div className="best-product-content">
                                            <Tag
                                                color="#f50"
                                                style={{
                                                    width: "45px",
                                                    backgroundColor: "#e5b300",
                                                    borderRadius: "10px",
                                                }}
                                            >
                                                {item.price}
                                            </Tag>
                                            <a
                                                style={{
                                                    color: 'white',
                                                    fontSize: '10px',
                                                }}
                                                href="https://ant.design"
                                            >
                                                {item.title}
                                            </a>
                                            <span align="left" style={{ fontSize: '11px' }}>
                                                Quantity:
                                                <span style={{ color: 'black', fontSize: '11px', marginLeft: "4px" }}>
                                                    {item.quantity}
                                                </span>
                                            </span>
                                        </div>
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Dashboard;