/*
 * orderDetails
 *
 * This is a the details of an order
 *
 */

// remove, use babel for antD css
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import * as React from 'react';
import OrderDetailHeader from '../OrderDetailHeader';

export default function OrderDetail() {

  return (
    <Layout>
      <OrderDetailHeader/>
    </Layout>
  );
}
