/*
 * orderDetails
 *
 * This is a the details of an order
 *
 */

// remove, use babel for antD css
import { Col, Card, Icon, Button, List } from 'antd';
import 'antd/dist/antd.css';

import * as React from 'react';

import { paymentDetailData } from './constants';

export default function OrderDetailHeader() {

  return (
    <Card size="small"
          title={<h4><Icon type="credit-card" theme="twoTone"/>&nbsp;Payment</h4>}
          actions={[<Button><Icon type="edit"/> Edit</Button>]}
    >
      <List
        size="small"
        dataSource={paymentDetailData}
        renderItem={item => (
          <List.Item>
            <Col span={8}>
              <h4>{item[0]}</h4>
            </Col>
            <Col span={14}>
              <p>{item[1]}</p>
            </Col>
          </List.Item>
        )}
      />
    </Card>
  );
}
