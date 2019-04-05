/*
 * orderDetails
 *
 * This is a the details of an order
 *
 */

// remove, use babel for antD css
import { Steps, Row, Col, PageHeader, Tag } from 'antd';
import 'antd/dist/antd.css';

import { NoteDrawer } from '../../../NoteDrawer';

import * as React from 'react';

import {
  Step,
} from './constants';
import { FormattedMessage } from 'react-intl';

export default function OrderDetailHeader() {

  return (
    <PageHeader
      onBack={() => console.log('back!')}
      title="Order # 1000 0000 1696 80"
      subTitle={(
        <Tag color="volcano">
          <FormattedMessage id="app.OrderDetails.rushOrder"/>
        </Tag>)}
      extra={[<NoteDrawer/>]}
      style={{ margin: '0px', padding: '16px', backgroundColor: '#f0f2f5' }}
    >
      <Row style={{ padding: '10px' }}>
        <Col span={6}>
          <Row>
            <h4>Order ID: 2253921</h4>
          </Row>
          <Row>
            <h4>
              <FormattedMessage id="app.OrderDetails.platformType"/>
            </h4>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <h4>
              <FormattedMessage id="app.OrderDetails.petOwner"/>
            </h4>
          </Row>
          <Row>
            <h4>
              <FormattedMessage id="app.OrderDetails.orderMethod"/>
            </h4>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <h4>
              <FormattedMessage id="app.OrderDetails.submittedBy"/>
            </h4>
          </Row>
          <Row>
            <h4>
              <FormattedMessage id="app.OrderDetails.type"/>
            </h4>
          </Row>
        </Col>
      </Row>
      <Row>
        <Steps current={2} status="error" style={{ padding: '10px' }}>
          <Step title="Placed" description="This is a description"/>
          <Step title="Authorized" description="This is a description"/>
          <Step title="Processing" description="This is a description"/>
          <Step title="Shipped" description="This is a description"/>
        </Steps>
      </Row>
    </PageHeader>
  );
}
