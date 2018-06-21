
import  React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb,BackTop, Icon } from 'antd';
import Login from './Login';
import './Home.css';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const Header1 = () =>
    <header className="header">
        <nav>
            <ul id="menu">
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </header>;
const HomePage = ()  => <div>This is HomePage.</div>;
const LogoutPage = () => <div>This is LogoutPage</div>;
const LoginPage = () => <Login/>;
const UserPage = () => <div>This is User Page</div>;
const ManagerPage = () => <div>This is Manager Page</div>;
const PostmanPage = () => <div>This is Postman Page</div>;
// const Up = () =>
//     <div>
//         <BackTop>
//             <div className="ant-back-top-inner">UP</div>
//         </BackTop>
//         Scroll down to see the bottom-right
//         <strong style={{ color: '#1088e9' }}> blue </strong>
//         button.
//     </div>;

const App = () =>
    <Router>
      <Home/>
    </Router>;

class Home extends React.Component {
    state = {
        collapsed: false
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (

            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" style={{ marginTop: 10}}>
                            <Icon type="home" />
                            <span><Link to="/" style={{color: '#fff'}}>Home</Link></span>
                        </Menu.Item>

                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="idcard" /><span>User</span></span>}
                        >
                            <Menu.Item key="7"><Link to="/user">user</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/manager">manager</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/postman">postman</Link></Menu.Item>

                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="inbox" /><span>Category</span></span>}
                        >
                            <Menu.Item key="3">编程技术</Menu.Item>
                            <Menu.Item key="4">世界文学</Menu.Item>
                            <Menu.Item key="5">儿童书籍</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6">
                            <Icon type="pie-chart" />
                            <span>Bookstore</span>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Icon type="shopping-cart" />
                            <span>购物车</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#', padding: 0 }} > <Header1/></Header>
                    <Content style={{ margin: '0 16px'}}>
                        <div style={{ margin: '16px 0', padding: 24, background: '#fff', minHeight: 360 }}>
                            <div className="container">
                                <Switch>
                                    <Route path="/" exact component={HomePage} />
                                    <Route path="/login"  component={LoginPage} />
                                    <Route path="/logout" component={LogoutPage} />
                                    <Route path="/user"  component={UserPage} />
                                    <Route path="/manager"  component={ManagerPage} />
                                    <Route path="/postman"  component={PostmanPage} />
                                </Switch>
                            </div>
                        </div>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>
                        Software Engineer homework ©2018 Created by Ant & React
                    </Footer>
                </Layout>
            </Layout>

        );
    }
}
export default App;
