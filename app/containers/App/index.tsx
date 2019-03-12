/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

// import GlobalStyle from '../../global-styles';

// Remove and use Babel
import 'antd/dist/antd.css';

import * as React from 'react';

import { Layout } from 'antd';

import Header from 'components/top-menu';
import SideMenu from 'components/side-menu';

export default function App() {

  const { Content, Footer } = Layout;

  return (
    <div>
      <Layout>
        <SideMenu />
        <Layout>
          <Header />
          <Content style={{ margin: '24px 16px' }}>
            <div>Hello World</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2019 Covetrus</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
