import {
    Row,
    Col,
    Input,
    Button
} from 'antd';
import './login.css';


function Login() {
    return (
        <div className="container">
            <Row>
                <Col span={12}>
                    <div className="image" >
                        <img src="./images/image.png" alt="" />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="login">
                        <img src='./images/logo.png' alt="" />
                        <Input 
                                placeholder="Store name" 
                                style={{
                                    borderRadius: "5px",
                                    marginTop: "60px",
                                    marginBottom: "20px",
                                    padding: "10px",
                                }}
                                suffix=".myshopify.com"
                        />
                        <Button 
                                type="primary" 
                                style={{
                                    borderRadius: "5px",
                                    padding: "20px",
                                    lineHeight: "0px",
                                    marginBottom: "20px"
                                }} 
                                block 
                        >Login</Button>
                        <span>Don’t have a</span> 
                        <img src="./images/shopify.png" alt="" style={{height: "19px"}}/>
                        <span> store yet? </span>
                        <a href="/#">Create store</a>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
