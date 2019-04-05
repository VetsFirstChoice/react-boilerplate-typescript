/*
 * OrderPage
 *
 * This is the order page of our App, at the '/orders' route
 */

import * as React from 'react';
import OrderHistory from 'containers/OrderPage/OrderHistory/Loadable';
import { Layout } from 'antd';

export default function OrdersPage() {

  return (
      <Layout style={{ background: '#fff', padding: 24 }}>
        <OrderHistory/>
      </Layout>
  );
}
