/*
 * orderDetails
 *
 * This is a the details of an order
 *
 */

// remove, use babel for antD css
import { Steps, Row, Col, Card, List, Table, Icon, Layout, Button, PageHeader } from 'antd';
import 'antd/dist/antd.css';

import * as React from 'react';

const practiceDetailData = [
  ['Name:', 'Practice 4399'],
  ['Phone:', '(505) 761-5555'],
  ['Practice:', 'Partner Practice'],
  ['DVM ID:', '4399'],
];

const clientDetailData = [
  ['Name:', 'Nikko Cabrera'],
  ['Phone 1:', '(623) 521-1111'],
  ['Email:', 'nikko.cabrera@roadrunnerpharmacy.net'],
];

const paymentDetailData = [
  ['Type:', 'Client Pay'],
  ['Method:', 'Visa - 1111 - 01/2021'],
  ['Address:', '14233 N 50th Ln Glendale, AZ 85306'],
];

const shippingDetailData = [
  ['Method:', 'Next Day'],
  ['Address:', '14233 N 50th Ln Glendale, AZ 85306'],
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
          title="Order # 1000 0000 1696 80"
          subTitle="Shipped 01/09/2018"
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
        <Row gutter={16} align="top" style={{ marginTop: '20px' }}>
          <Col className="gutter-row" span={6}>
            <Card size="small" title={<h3><Icon type="shop" theme="twoTone" />&nbsp;Practice</h3>}
              actions={[<div><Icon type="team" /> Assist</div>, <div><Icon type="eye" /> View</div>]}>
              <List
                size="small"
                dataSource={practiceDetailData}
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
          </Col>
          <Col className="gutter-row" span={6}>
            <Card size="small" title={<h3><Icon type="idcard" theme="twoTone" />&nbsp;Client</h3>}
              actions={[<div><Icon type="team" /> Assist</div>, <div><Icon type="eye" /> View</div>]}
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
          </Col>
          <Col className="gutter-row" span={6}>
            <Card size="small"
              title={<h3><Icon type="credit-card" theme="twoTone" />&nbsp;Payment</h3>}
              actions={[<div><Icon type="edit" /> Edit</div>]}
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
          </Col>
          <Col className="gutter-row" span={6}>
            <Card size="small" title={<h3><Icon type="idcard" theme="twoTone" />&nbsp;Shipping</h3>}
              actions={[<div><Icon type="edit" /> Edit</div>]}
            >
              <List
                size="small"
                dataSource={shippingDetailData}
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
          </Col>
        </Row>
        <Row gutter={16} align="top" style={{ marginTop: '20px' }}>
          <Col className="gutter-row" span={24}>
            <Card size="small" title={<h3><Icon type="profile" theme="twoTone" /> Order Items</h3>}>
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
          </Col>
        </Row>
      </Layout>
    );
  }
}
