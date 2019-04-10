/*
 * Header
 *
 * This is a navigation bar at the top of the page
 *
 */

// remove, use babel for antD css
import 'antd/dist/antd.css';

import * as React from 'react';
import { Layout, Affix, Row, Col } from 'antd';
import LanguageSelect from './LanguageSelect/Loadable';
import Breadcrumbs from '../Breadcrumbs/Loadable';


export default function TopMenu() {
  const { Header } = Layout;

  return (
    <Affix>
      <Header style={{ background: '#fff' }}>
        <Row align={'middle'}>
          <Col style={{ marginTop: 18 }} span={12}>
            <Breadcrumbs/>
          </Col>
          <Col style={{ marginTop: 12 }} span={12}>
            <LanguageSelect/>
          </Col>
        </Row>
      </Header>
    </Affix>
  );
}

