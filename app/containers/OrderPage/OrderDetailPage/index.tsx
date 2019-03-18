/*
 * orderDetails
 *
 * This is a the details of an order
 *
 */

// remove, use babel for antD css
import { Col, Layout, Row } from 'antd';
import 'antd/dist/antd.css';

import * as React from 'react';
import OrderDetailHeader from './OrderDetailHeader';
import PracticeInformation from './PracticeInformation';
import ClientInformation from './ClientInformation';
import ShippingInformation from './ShippingInformation';
import PaymentInformation from './PaymentInformation';

export default function OrderDetail() {

  return (
    <Layout>
      <OrderDetailHeader/>
      <Row gutter={16} align="top" style={{ marginTop: '20px' }}>
        <Col className="gutter-row" span={6}>
          <ClientInformation/>
        </Col>
        <Col className="gutter-row" span={6}>
          <PracticeInformation/>
        </Col>
        <Col className="gutter-row" span={6}>
          <PaymentInformation/>
        </Col>
        <Col className="gutter-row" span={6}>
          <ShippingInformation/>
        </Col>
      </Row>
    </Layout>
  );
}
