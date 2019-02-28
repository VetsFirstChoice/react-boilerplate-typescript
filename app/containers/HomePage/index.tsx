/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import 'antd/dist/antd.css';

import {
  Layout, Menu, Icon,
  Avatar, Button,
  // Spin,
} from 'antd';
import * as React from 'react';
// const logo = '../../images/covetrus_logo.png';
import styled from 'styled-components';

declare function require(path: string);

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  public render() {

    const { Header, Content, Sider, Footer } = Layout;
    const Logo = styled.div`
    height: 32px;
    background: ;
    margin: 16px;
    width: 250px;
    `;

    return (
      <Layout>
        <Sider
          breakpoint="lg"
          theme="light"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <Logo > <img src={require('../../images/covetrus_logo.png')} alt="Test" style={ {width: '150px' }} /></Logo>
          <Menu mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1"><Icon type="dashboard" theme="twoTone" />Dashboard</Menu.Item>
            <Menu.Item key="2"><Icon type="edit" theme="twoTone" />Scripts</Menu.Item>
            <Menu.Item key="3"><Icon type="credit-card" theme="twoTone" />Orders</Menu.Item>
            <Menu.Item key="4"><Icon type="warning" theme="twoTone" />Exceptions</Menu.Item>
            <Menu.Item key="5"><Icon type="schedule" theme="twoTone" />AutoShip</Menu.Item>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
          <div style={{ float: 'right' }}>
            <Button style={{ margin: '15px' }}type="primary" shape="circle" icon="setting" />
            <Button style={{ margin: '15px' }} type="primary" shape="circle" icon="bell" />
            <Avatar style={{ backgroundColor: '#87d068', margin: '15px' }} icon="user" />
          </div>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              content
        </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2019 Covetrus
      </Footer>
        </Layout>
      </Layout>

    );
  }
}

