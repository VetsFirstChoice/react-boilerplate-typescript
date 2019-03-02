/*
 * Header
 *
 * This is a navigation bar at the top of the page
 *
 */

// remove, use babel for antD css
import 'antd/dist/antd.css';

import * as React from 'react';
import { Layout, Button, Badge } from 'antd';

/* eslint-disable react/prefer-stateless-function */
export default class TopMenu extends React.PureComponent {
  public render() {
    const { Header } = Layout;

    return (
      <Header style={{ background: '#fff' }}>
        <div style={{ float: 'right' }}>
          <Badge>
            <Button style={
              { backgroundColor: '#87d068', borderColor: '#bfbfbf', marginRight: '10px'}
            } type="primary" shape="circle" icon="user" size="large" />
          </Badge>
          <Badge count={5} style={{ marginRight: '15px' }}>
            <Button style={
              { display: 'inline-flex', marginRight: '10px' }
            } type="primary" icon="bell" size="large" />
          </Badge>
          <Button style={
            { display: 'inline-flex'}}
            type="primary" icon="setting" size="large" />
        </div>
      </Header>
    );
  }
}

