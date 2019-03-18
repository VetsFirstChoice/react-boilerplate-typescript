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

import { clientDetailData } from './constants';

export default function OrderDetailClient() {

  return (
    <Card
      size="small"
      title={<h4><Icon type="idcard" theme="twoTone"/>&nbsp;Client</h4>}
      actions={[<Button><Icon type="team"/> Assist</Button>, <Button><Icon type="eye"/> View</Button>]}
    >
      <List
        size="small"
        dataSource={clientDetailData}
        renderItem={item => (
          <List.Item>
            <Col span={8}>
              <h4>{item[0]}</h4>
            </Col>
            <Col span={14}>
              <p style={{ wordBreak: 'break-all' }}>{item[1]}</p>
            </Col>
          </List.Item>
        )}
      />
    </Card>
  );
}
