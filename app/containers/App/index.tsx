/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

// Remove and use Babel
import 'antd/dist/antd.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import SideMenu from 'containers/SideMenu/Loadable';
import Header from 'containers/TopMenu/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import OrderPage from 'containers/OrderPage/Loadable';
import OrderDetailPage from 'containers/OrderPage/OrderDetailPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';


export default function App() {

  const { Content, Footer } = Layout;

  return (
    <Layout>
      <SideMenu/>
      <Layout>
        <Header/>
        <Content style={{ margin: '6px' }}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/orders" component={OrderPage}/>
            <Route path="/orders/:pathParam?" component={OrderDetailPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2019 Covetrus</Footer>
      </Layout>
    </Layout>
  );
}
