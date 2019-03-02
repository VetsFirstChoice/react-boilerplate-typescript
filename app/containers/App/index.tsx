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

import HomePage from 'containers/HomePage/Loadable';
import ScriptPage from 'containers/ScriptPage/Loadable';
import OrderPage from 'containers/OrderPage/Loadable';
import ProductPage from 'containers/ProductPage/Loadable';
import ExceptionPage from 'containers/ExceptionPage/Loadable';
import AutoshipPage from 'containers/AutoshipPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from 'components/top-menu';
import SideMenu from 'components/side-menu';
import Breadcrumbs from 'components/breadcrumbs';

export default function App() {

  const { Content, Footer } = Layout;

  return (
    <div>
      <Layout>
        <SideMenu />
        <Layout>
          <Header />
          <Content style={{ margin: '24px 24px'}}>
          <Breadcrumbs />
            <div style={{ padding: 24, background: '#fff' }}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/scripts" component={ScriptPage} />
                <Route exact path="/orders" component={OrderPage} />
                <Route exact path="/products" component={ProductPage} />
                <Route exact path="/exceptions" component={ExceptionPage} />
                <Route exact path="/autoship" component={AutoshipPage} />
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
