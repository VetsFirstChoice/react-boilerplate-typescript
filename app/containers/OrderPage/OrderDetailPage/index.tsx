/*
 * OrderDetailPage
 *
 * This is the order details page of our App, at the '/orders/params' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import OrderDetail from 'containers/OrderPage/OrderDetail';
import { Layout } from 'antd';

/* eslint-disable react/prefer-stateless-function */
export default function OrderDetailPage() {

  return (
    <Layout>
      <OrderDetail/>
    </Layout>
  );
}

