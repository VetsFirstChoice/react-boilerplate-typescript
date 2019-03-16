/*
 * orderDetails
 *
 * This is a the details of an order
 *
 */

// remove, use babel for antD css
import { Steps, Row, Col, Card, List, Table, Icon, Layout, Button, PageHeader, Tag } from 'antd';
import 'antd/dist/antd.css';

import * as React from 'react';

import {
  practiceDetailData, clientDetailData, paymentDetailData, shippingDetailData, data, Step,
  detailedList, columns,
} from './constants';

/* eslint-disable react/prefer-stateless-function */
export default class OrderDetail extends React.PureComponent {

  public render() {

    return (
      <Layout>
        <PageHeader
          onBack={() => console.log('back!')}
          title="Order # 1000 0000 1696 80"
          subTitle={<Tag color="volcano">Rush Order</Tag>}
          extra={[
            <Button key="3" type="primary">Cancel Order</Button>,
            <Button key="2" type="primary">Fraud</Button>,
            <Button key="1" type="primary">Flag Order</Button>,
            <Button key="1" type="primary">Refund Order</Button>,
          ]}
          style={{ margin: '0px', padding: '16px', backgroundColor: '#f0f2f5' }}
        >
          <Row style={{ padding: '10px' }}>
            <Col span={6}>
              <Row>
                Order ID: 2253921
          </Row>
              <Row>
                Platform Type: Vets First Choice
          </Row>
            </Col>
            <Col span={6}>
              <Row>
                Order Origin: Pet Owner
          </Row>
              <Row>
                Order Method: Web
          </Row>
            </Col>
            <Col span={6}>
              <Row>
                Submitted By: Client
          </Row>
              <Row>
                Type: Patient Specific
          </Row>
            </Col>
          </Row>
          <Row>
            <Steps current={2} status="error" style={{ padding: '10px' }}>
              <Step title="Placed" description="This is a description" />
              <Step title="Authorized" description="This is a description" />
              <Step title="Processing" description="This is a description" />
              <Step title="Shipped" description="This is a description" />
            </Steps>
          </Row>
        </PageHeader>
        <Row gutter={16} align="top" style={{ marginTop: '20px' }}>
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
