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
  Layout, Menu, Breadcrumb, Icon, Avatar, Spin,
} from 'antd';
import * as React from 'react';

import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  public render() {

    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

    const Logo = styled.div`
    width: 200px;
    height: 50px;
    margin: 7px;
    float: left;
    text-align: center;
    `;

    return (
      <Layout>
        <Header style={{padding: '0'}}>
          <Logo><Spin /></Logo>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Icon type="dashboard" theme="twoTone" />Dashboard</Menu.Item>
            <Menu.Item key="2"><Icon type="edit" theme="twoTone" />Scripts</Menu.Item>
            <Menu.Item key="3"><Icon type="credit-card" theme="twoTone" />Orders</Menu.Item>
            <Menu.Item key="4"><Icon type="warning" theme="twoTone" />Exceptions</Menu.Item>
            <Menu.Item key="5"><Icon type="schedule" theme="filled" />AutoShip</Menu.Item>

            <Avatar style={{ backgroundColor: '#87d068', float: 'right', margin: '20px' }} icon="user" />

          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            >
              Content
          </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
