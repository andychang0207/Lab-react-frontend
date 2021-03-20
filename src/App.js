import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import "antd/dist/antd.css";
import {Provider} from 'react-redux';
import store from './redux/reducer/store';
import MessageArea from './page/MessageArea';
import Home from './page/Home';
import { Layout, Menu, Row, Statistic,Col } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      current:'Home',
      current_user:1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    console.log('click ', e);
    this.setState({ current: e.key });
  }
  render() {
    const {current,current_user} = this.state;
    return (
    <Provider store={store}>
      <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[current]} onClick={this.handleClick} selectedKeys={[current]}>
            <Menu.Item key="Home">Home</Menu.Item>
            <Menu.Item key="MesArea">留言板</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{width:'100%',float:'left'}}>
          {current==='Home' && <Home />}
          {current==='MesArea' && <MessageArea />}
          </div>
          <Row style={{marginTop:30,float:'left'}}gutter={16}>
              <Col span={12}>
                <Statistic title="Active Users" value={current_user} />
              </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Andy Design ©2021 Created by Andy Chang</Footer>
      </Layout>
      </div>
    </Provider>
  );}
}

export default App;
