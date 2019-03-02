/*
 * sortTable
 *
 * This is a table, with filters
 *
 */

// remove, use babel for antD css
import 'antd/dist/antd.css';
import { Table, Button, Row, Badge, Select, Input, DatePicker, Col, Tabs, Icon } from 'antd';
import * as React from 'react';
import ButtonGroup from 'antd/lib/button/button-group';

/* eslint-disable react/prefer-stateless-function */
export default class SortTable extends React.PureComponent {
  public render() {

    const InputGroup = Input.Group;
    const Option = Select.Option;

    const columns: any = [{
      title: 'Order ID',
      dataIndex: 'orderId',
      width: '150px',
      filters: [{
        text: 'Joe',
        value: 'Joe',
      }, {
        text: 'Jim',
        value: 'Jim',
      }, {
        text: 'Submenu',
        value: 'Submenu',
        children: [{
          text: 'Green',
          value: 'Green',
        }, {
          text: 'Black',
          value: 'Black',
        }],
      }],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    }, {
      title: 'Order #',
      dataIndex: 'orderNum',
      width: '100px',
      sorter: (a, b) => a.orderNum - b.orderNum,
    }, {
      title: 'Order Date',
      dataIndex: 'orderDate',
      width: '100px',
      sorter: (a, b) => a.orderDate - b.orderDate,
    }, {
      title: 'DVM ID',
      dataIndex: 'dvmId',
      width: '100px',
      sorter: (a, b) => a.dvmId - b.dvmId,
    }, {
      title: 'Client',
      dataIndex: 'client',
      width: '150px',
    }, {
      title: 'Platform',
      dataIndex: 'platform',
      width: '150px',
    }, {
      title: 'Ship Method',
      dataIndex: 'shipMethod',
      width: '100px',
    }, {
      title: 'Order Status',
      dataIndex: 'status',
      width: '150px',
      render: text => <Badge status="processing" text={text} />,
    }, {
      title: 'Order Total',
      dataIndex: 'total',
      width: '100px',
      sorter: (a, b) => a.total - b.total,
    }];

    const data = [{
      key: '1',
      orderId: '5494685',
      orderNum: '56995',
      orderDate: '04/15/2017',
      dvmId: '6584',
      client: 'Cecilia Pozo',
      platform: 'RoadRunner',
      shipMethod: 'USPS',
      status: 'Shipped',
      total: '$87.50',
    }, {
      key: '2',
      orderId: '1525884',
      orderNum: '21886',
      orderDate: '12/31/2019',
      dvmId: '9999',
      client: 'Russ Cargill',
      platform: 'VIP Petcare',
      shipMethod: 'UPS',
      status: 'Done',
      total: '$34.75',
    }, {
      key: '3',
      orderId: '1326599',
      orderNum: '25515',
      orderDate: '01/23/2018',
      dvmId: '4659',
      client: 'Jeffory Lebowski',
      platform: 'VPA',
      shipMethod: 'FedEx',
      status: 'Cancelled',
      total: '$220.00',
    }, {
      key: '5',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '6',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '7',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '8',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '9',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }, {
      key: '10',
      orderId: '2544152',
      orderNum: '45985',
      orderDate: '06/30/2018',
      dvmId: '0418',
      client: 'Emily Baker',
      platform: 'Vets First Choice',
      shipMethod: 'USPS',
      status: 'Delayed',
      total: '$120.12',
    }];

    function onChange(pagination, filters, sorter) {
      console.log('params', pagination, filters, sorter);
    }

    const { RangePicker } = DatePicker;

    const dateFormat = 'DD/MM/YYYY';

    const TabPane = Tabs.TabPane;

    const search = (
      <Row type="flex" justify="space-around" align="middle"
        style={{ background: '#fefefe', padding: '15px 0' }}>
        <Col span={8}>
          <InputGroup compact>
            <Select defaultValue="Option1">
              <Option value="Option1">Order #</Option>
              <Option value="Option2">Client Name</Option>
              <Option value="Option3">Client Email</Option>
              <Option value="Option4">DVM ID</Option>
              <Option value="Option5">Invoice #</Option>
              <Option value="Option6">Order ID</Option>
              <Option value="Option7">Ship Order #</Option>
              <Option value="Option8">SKU</Option>
              <Option value="Option9">Tote #</Option>
              <Option value="Option10">Tracking #</Option>
            </Select>
            <Input style={{ width: '50%' }} />
            <Button icon="search" shape="circle-outline" />
          </InputGroup>
        </Col>
        <Col span={12}>
          <InputGroup compact>
            <RangePicker format={dateFormat} />
            <Button icon="search" shape="circle-outline" />
          </InputGroup>
        </Col>
        <br />
      </Row>
    );

    const views = (
      <Row type="flex" justify="space-around" align="middle"
        style={{ background: '#fefefe', padding: '15px 0' }}>
        <Badge count={2} overflowCount={10}>
          <Button type="primary" ghost size="small">CC Auth Declined</Button>
        </Badge>
        <Badge count={16} overflowCount={10}>
          <Button type="danger" ghost size="small">PV1 Exceptions</Button>
        </Badge>
        <Badge count={10} overflowCount={10}>
          <Button type="danger" ghost size="small">Inventory Exceptions</Button>
        </Badge>
        <Badge count={3} overflowCount={10}>
          <Button type="primary" ghost size="small">Call Center Exceptions</Button>
        </Badge>
        <Badge count={8} overflowCount={10}>
          <Button type="danger" ghost size="small">Tech Exceptions</Button>
        </Badge>
        <Badge count={4} overflowCount={10}>
          <Button type="primary" ghost size="small">Fraud Risk</Button>
        </Badge>
        <Badge count={1} overflowCount={10}>
          <Button type="primary" ghost size="small">Ads Exceptions</Button>
        </Badge>
        <Badge count={0} overflowCount={10}>
          <Button type="primary" ghost size="small">Autoship Exceptions</Button>
        </Badge>
        <br />
      </Row>
    );

    const queues = (
      <Row style={{ background: '#fefefe', padding: '15px 0' }}>
        <ButtonGroup>
          <Button>All Open</Button>
          <Button>My Orders</Button>
          <Button>Fullfillment Processing</Button>
          <Button>Inventory In Motion</Button>
          <Button>Purina Open Orders</Button>
          <Button>Royal Canin Open Orders</Button>
          <Button>Hills Open Orders</Button>
        </ButtonGroup>
        <br />
      </Row>
    );

    return (
      <div>
        <Tabs defaultActiveKey="1" style={{ height: '135px' }}>
          <TabPane tab={<span><Icon type="search" />Search</span>} key="1">
            {search}
          </TabPane>
          <TabPane tab={<span><Icon type="eye" />Views</span>} key="2">
            {views}
          </TabPane>
          <TabPane tab={<span><Icon type="profile" />Queues</span>} key="3">
            {queues}
          </TabPane>
        </Tabs>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    );
  }
}

