import React from "react";
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import asyncLoad from  './util/asyncComponent'
import style from './App.scss';
import 'antd/dist/antd.css';


const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function App() {
  return (
    <Layout className={style.app}>
      <Router>
        <Layout>
          <Sider width={200} className={style.menu}>
            <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%", borderRight: 0 }}>
              <SubMenu key="sub1" title={<span><Icon type="user" />gridLayout</span>}>
                <Menu.Item key="1"><Link to="/">非自适应-gridLayout</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/meun1">自适应-gridLayout</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/meun2">菜单1-3</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content className={style.container}>
                <Switch>
                  <Route path="/meun1" component={ asyncLoad(()=> import('./page/responsive-drag-layout.js'))}></Route>
                  <Route path="/meun2" component={()=><div>111</div>} />
                  <Route path="/" component={ asyncLoad(()=> import('./page/react-drag-layout'))}></Route>
                </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Layout>
  );
}

export default App;
