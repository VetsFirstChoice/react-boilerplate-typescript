/*
 * Header
 *
 * This is a navigation bar at the top of the page
 *
 */

// remove, use babel for antD css
import 'antd/dist/antd.css';

import * as React from 'react';
import { Layout, Affix } from 'antd';

/* eslint-disable react/prefer-stateless-function */
export default class TopMenu extends React.PureComponent {
  public render() {
    const { Header } = Layout;

    return (
      <Affix>
        <Header style={{ background: '#fff' }}/>
      </Affix>
    );
  }
}

