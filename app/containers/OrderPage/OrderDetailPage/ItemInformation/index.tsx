/*
 * orderDetails
 *
 * This is a the details of an order
 *
 */

// remove, use babel for antD css
import { Col, Card, Icon, Row, Table } from 'antd';
import 'antd/dist/antd.css';

import * as React from 'react';

import { columns, data, detailedList } from './constants';

export default function ItemInformation() {

  return (
    <Card size="small" title={<h4><Icon type="profile" theme="twoTone"/> Order Items</h4>}>
      <Card title={
        (
          <Row style={{ padding: '15px 0 15px 20px ' }}>
            <Col span={5}>
              <p>Shipping #: 1223592101</p>
            </Col>
            <Col span={8}>
              <p>Shipped 01/09/2019</p>
            </Col>
            <Col span={24}>
              <a>USPS First Class - 94001102054920000009815</a>
            </Col>
          </Row>
        )
      } bordered={false}>
        <Table
          columns={columns}
          dataSource={data}
          expandedRowRender=
            {() => detailedList}
        />
      </Card>
    </Card>
  );
}
