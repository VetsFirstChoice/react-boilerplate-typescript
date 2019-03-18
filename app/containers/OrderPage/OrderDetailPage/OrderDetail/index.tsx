/*
 * orderDetails
 *
 * This is a the details of an order
 *
 */

// remove, use babel for antD css
import { Layout, Row } from 'antd';
import 'antd/dist/antd.css';

import * as React from 'react';
import OrderDetailHeader from '../OrderDetailHeader';
import PracticeInformation from '../OrderDetailPractice';


export default function OrderDetail() {

  return (
    <Layout>
      <OrderDetailHeader/>
        <Row gutter={16} align="top" style={{ marginTop: '20px' }}>
          <PracticeInformation/>
        </Row>
    </Layout>
  );
}
