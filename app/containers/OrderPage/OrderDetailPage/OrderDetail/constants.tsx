import * as React from 'react';

import { Col, Row, Steps, List } from 'antd';

export const paymentDetailData = [
  ['Type:', 'Client Pay'],
  ['Method:', 'Visa - 1111 - 01/2021'],
  ['Address:', '14233 N 50th Ln Glendale, AZ 85306'],
];

export const shippingDetailData = [
  ['Method:', 'Next Day'],
  ['Address:', '14233 N 50th Ln Glendale, AZ 85306'],
];

export const data = [
  {
    key: 1,
    item: 'Nexgard Chewables for Dogs',
    qty: '1 X 6 pack',
    patient: 'Fido',
    client: '$110.95',
    practiceCost: '$101.96',
    description: () => detailedList,
  },
];

export const columns = [
  { title: 'Item', dataIndex: 'item', key: 'item' },
  { title: 'Qty', dataIndex: 'qty', key: 'qty' },
  { title: 'Patient', dataIndex: 'patient', key: 'patient' },
  { title: 'Client Price', dataIndex: 'client', key: 'client' },
  { title: 'Practice Cost', dataIndex: 'practiceCost', key: 'practiceCost' },
  // {
  //   title: 'Action', dataIndex: '', key: 'x', render: () => <a href="javascript:;">Delete</a>,
  // },
];

export const Step = Steps.Step;

const prodData = [
  'Line #: 2736484',
  'SKU: 3005602',
  'Flavor: Bacon',
  'Location: VFC Warehouse',
  'QOH: ',
];

const prodData2 = [
  'MC#: 5620497',
  'Refills Left: 2',
  'Auth Vet: Demo Vet',
];

export const detailedList = (
  <Row gutter={16}>
    <Col span={8}>
      <List
        size="small"
        dataSource={prodData}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </Col>
    <Col span={8}>
      <List
        size="small"
        dataSource={prodData2}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </Col>
    <Col span={8}>
      <Steps direction="vertical" size="small" current={2}>
        <Step title="New 1/09/2019" description="10:54:36 AM | System" />
        <Step title="Verified 1/09/2019" description="10:54:58 AM | Nikko Cabrera" />
        <Step title="Labeled" description="" />
        <Step title="Dispensed" description="" />
      </Steps>
    </Col>
  </Row>
);


