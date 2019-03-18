/*
 * OrderPage
 *
 * This is the order page of our App, at the '/orders' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import Orders from 'containers/OrderPage/OrderHistory';
import { Layout } from 'antd';

export default function OrdersPage() {

  return (
    <Layout style={{ background: '#fff', padding: 24 }}>
      <Orders/>
    </Layout>
  );
}

