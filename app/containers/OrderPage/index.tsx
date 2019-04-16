/*
 * OrderPage
 *
 * This is the order page of our App, at the '/orders' route
 */

import * as React from 'react';
import OrderSearch from 'containers/OrderPage/OrderSearch/Loadable';
import { Layout } from 'antd';


export default function OrdersPage() {

  return (
    <Layout style={{ background: '#fff', padding: 24 }}>
      <OrderSearch />
    </Layout>
  );
}
