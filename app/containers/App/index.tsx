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
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from 'components/top-menu';
import SideMenu from 'components/side-menu';

import HomePage from 'containers/HomePage/Loadable';
import OrderPage from 'containers/OrderPage/Loadable';
import OrderDetailPage from 'containers/OrderDetailPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
export default function App() {

  const { Content, Footer } = Layout;

  return (
    <div>
      <Layout>
        <SideMenu />
        <Layout>
          <Header />
          <Content style={{ margin: '10px'}}>
          <div style={{ padding: '24px' }}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/orders" component={OrderPage} />
                <Route path="/orders/:pathParam?" component={OrderDetailPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2019 Covetrus</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
