/*
 * Header
 *
 * This is a navigation bar at the top of the page
 *
 */

// remove, use babel for antD css
import 'antd/dist/antd.css';
import * as React from 'react';
import { Menu, Icon, Affix } from 'antd';
import { Link } from 'react-router-dom';
import Sider from 'antd/lib/layout/Sider';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function SideMenu() {

  const Logo = styled.div`
      height: 32px;
      background: ;
      margin: 16px;
      width: 250px;
    `;

  return (
    <Sider
      breakpoint="lg"
      theme="light"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Affix>
        <Logo>
          <img
            src={require('../../images/covetrus_logo.png')}
            alt="Test"
            style={{ width: '150px' }}
          />
        </Logo>
        {/* Set default key to store value */}
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
                <span>
                  <Icon
                    type="dashboard"
                    theme="twoTone"
                  />
                  <FormattedMessage {...messages.dashboard}/>
                </span>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="2">
              <Link to="/scripts">
                <Icon
                  type="edit"
                  theme="twoTone"
                />
                Scripts
              </Link>
            </Menu.Item> */}
          <Menu.Item key="3">
            <Link to="/orders">
              <Icon
                type="credit-card"
                theme="twoTone"
                style={{ display: 'inline-flex' }}
              />
              <FormattedMessage {...messages.orders}/>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="4">
              <Link to="/products">
                <Icon
                  type="shop"
                  theme="twoTone"
                />
                Products
              </Link>
            </Menu.Item> */}
          {/* <Menu.Item key="5">
              <Link to="/exceptions">
                <Icon
                  type="warning"
                  theme="twoTone"
                />
                Exceptions
              </Link>
            </Menu.Item> */}
          {/* <Menu.Item key="6">
              <Link to="/autoship">
                <Icon
                  type="schedule"
                  theme="twoTone"
                />
                Autoship
              </Link>
            </Menu.Item> */}
        </Menu>
      </Affix>
    </Sider>
  );
}
