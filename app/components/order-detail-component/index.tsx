/*
 * orderDetails
 *
 * This is a the details of an order
 *
 */

// remove, use babel for antD css
import { Steps, Row, Col, Card, List, Table, Icon, Alert, Layout, Button, PageHeader } from 'antd';
import 'antd/dist/antd.css';

import * as React from 'react';

const orderDetailData = [
  'Order ID: 2253921',
  'Date Placed: 01/09/2019@10:52:48 AM EST',
  'Platform Type: Vets First Choice',
  'Order Origin: Pet Owner',
  'Order Method: Web',
  'Submitted by: Client',
  'Type: Patient Specific',
];

const clientDetailData = [
  'Name: Nikko Cabrera',
  'Email: nikko.cabrera@roadrunnerpharmacy.net',
  'Phone 1: (623) 521-1111',
];

/* eslint-disable react/prefer-stateless-function */
export default class OrderDetail extends React.PureComponent {

  public render() {
    const Step = Steps.Step;
    const columns = [
      { title: 'Item', dataIndex: 'item', key: 'item' },
      { title: 'Qty', dataIndex: 'qty', key: 'qty' },
      { title: 'Patient', dataIndex: 'patient', key: 'patient' },
      { title: 'Client Price', dataIndex: 'client', key: 'client' },
      { title: 'Practice Cost', dataIndex: 'practiceCost', key: 'practiceCost' },
      // {
      //   title: 'Action', dataIndex: '', key: 'x', render: () => <a href="javascript:;">Delete</a>,
      // },
    ];

    const data = [
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

    const routes = [
      {
        path: '/',
        breadcrumbName: 'Home',
      },
      {
        path: 'orders',
        breadcrumbName: 'Orders',
      },
      {
        path: 'order',
        breadcrumbName: 'Order # 1000 0000 1696 80',
      },
    ];

    const detailedList = (
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

    return (
      <Layout>
        <PageHeader
          onBack={() => console.log('back!')}
          title="Status"
          subTitle="Shipped 01/09/2018"
          breadcrumb={{ routes: routes }}
          extra={[
            <Button key="3" type="primary" ghost>Cancel Order</Button>,
            <Button key="2" type="primary" ghost>Fraud</Button>,
            <Button key="1" type="primary" ghost>Flag Order</Button>,
            <Button key="1" type="primary" ghost>Refund Order</Button>,
          ]}
          style={{ margin: '0px' }}
        />
        <Row gutter={16} style={{ margin: '0px', padding: '15px', background: '#fff' }}>
          <Steps current={2} status="error">
            <Step title="Placed" description="This is a description" />
            <Step title="Authorized" description="This is a description" />
            <Step title="Processing" description="This is a description" />
            <Step title="Shipped" description="This is a description" />
          </Steps>
        </Row>
        <Row gutter={16} style={{ paddingTop: '25px' }}>
          <Col className="gutter-row" span={7}>
            <Card size="small" title={<h3><Icon type="shopping" theme="twoTone" /> Order Details</h3>}>
              <List
                size="small"
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                dataSource={orderDetailData}
                renderItem={item => (<List.Item>{item}</List.Item>)}
              />
            </Card>
            <Card size="small" title={<h3><Icon type="idcard" theme="twoTone" /> Client Details</h3>}
              style={{ marginTop: '25px' }}>
              <List
                size="small"
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                dataSource={clientDetailData}
                renderItem={item => (<List.Item>{item}</List.Item>)}
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={17}>
            <Card size="small" title={<h3><Icon type="profile" theme="twoTone" /> Order Items</h3>}>
              <Alert
                message="Shipping #: 1223592101"
                description="Shipped 01/09/2019 USPS First Class - 94001102054920000009815"
                type="info"
                showIcon
                style={{ margin: '20px' }}
              />
              <Table
                columns={columns}
                dataSource={data}
                expandedRowRender=
                {() => detailedList}
              />
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}
