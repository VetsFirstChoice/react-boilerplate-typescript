/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
// Remove and use Babel
import 'antd/dist/antd.css';

import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import {
  Layout, Menu, Icon,
  Avatar, Button,
} from 'antd';
import HomePage from 'containers/HomePage/Loadable';
import ScriptPage from 'containers/ScriptPage/Loadable';
import OrderPage from 'containers/OrderPage/Loadable';
import ExceptionPage from 'containers/ExceptionPage/Loadable';
import AutoshipPage from 'containers/AutoshipPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import styled from 'styled-components';

export default function App() {
  const Logo = styled.div`
    height: 32px;
    background: ;
    margin: 16px;
    width: 250px;
    `;

  const { Header, Content, Sider, Footer } = Layout;

  return (

    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          theme="light"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <Logo > <img src={require('../../images/covetrus_logo.png')} alt="Test" style={{ width: '150px' }} /></Logo>
          {/* Set default key to store value */}
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/"><Icon type="dashboard" theme="twoTone" />Dashboard</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/scripts"><Icon type="edit" theme="twoTone" />Scripts</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/orders"><Icon type="credit-card" theme="twoTone" />Orders</Link></Menu.Item>
            <Menu.Item key="4">
              <Link to="/exceptions"><Icon type="warning" theme="twoTone" />Exceptions</Link>
            </Menu.Item>
            <Menu.Item key="5"><Link to="/autoship"><Icon type="schedule" theme="twoTone" />AutoShip</Link></Menu.Item>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            <div style={{ float: 'right' }}>
              <Button style={{ margin: '15px' }} type="primary" shape="circle" icon="setting" />
              <Button style={{ margin: '15px' }} type="primary" shape="circle" icon="bell" />
              <Avatar style={{ backgroundColor: '#87d068', margin: '15px' }} icon="user" />
            </div>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/scripts" component={ScriptPage} />
                <Route exact path="/orders" component={OrderPage} />
                <Route exact path="/exceptions" component={ExceptionPage} />
                <Route exact path="/autoship" component={AutoshipPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2019 Covetrus
      </Footer>
        </Layout>
      </Layout>

      <GlobalStyle />
    </div>
  );
}
