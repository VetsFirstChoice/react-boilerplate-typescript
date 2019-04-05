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
import LanguageSelect from './LanguageSelect/Loadable';


export default function TopMenu() {
  const { Header } = Layout;

  return (
    <Affix>
      <Header style={{ background: '#fff' }}>
        <LanguageSelect/>
      </Header>
    </Affix>
  );
}

