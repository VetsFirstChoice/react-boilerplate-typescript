import { Link } from 'react-router-dom';
import { Badge, Button, Row } from 'antd';
import * as React from 'react';
import ButtonGroup from 'antd/lib/button/button-group';

export const columns: any = [{
  title: 'Order ID',
  dataIndex: 'orderId',
  width: '100px',
  sorter: (a, b) => a.name.length - b.name.length,
  sortDirections: ['descend'],
}, {
  title: 'Order #',
  dataIndex: 'orderNum',
  width: '100px',
  sorter: (a, b) => a.orderNum - b.orderNum,
  render: text => <Link to="orders/784776467">{text}</Link>,
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
  width: '100px',
}, {
  title: 'Platform',
  dataIndex: 'platform',
  width: '100px',
  filters: [
    {
      text: 'Recent',
      value: 'recentPlatforms',
      children: [{
        text: 'Vets First Choice',
        value: 'Vets First Choice',
      }],
    }, {
      text: 'All',
      value: 'allPlatforms',
      children: [{
        text: 'Atlas',
        value: 'Atlas',
      }, {
        text: 'MyVetsMeds',
        value: 'MyVetsMeds',
      }, {
        text: 'PTP',
        value: 'PTP',
      }, {
        text: 'RoadRunner',
        value: 'RoadRunner',
      }, {
        text: 'Vets First Choice',
        value: 'Vets First Choice',
      }, {
        text: 'VIP Petcare',
        value: 'VIP Petcare',
      }, {
        text: 'VPA',
        value: 'VPA',
      }],
    }],
  onFilter: (value, record) => record.platform.indexOf(value) === 0,
}, {
  title: 'Facility',
  dataIndex: 'facility',
  width: '100px',
  filters: [
    {
      text: 'Recent',
      value: 'Recent Facilities',
      children: [{
        text: 'VFC Warehouse',
        value: 'VFC Warehouse',
      }],
    }, {
      text: 'All',
      value: 'All Facilities',
      children: [{
        text: 'Atlas Facility',
        value: 'Atlas Facility',
      }, {
        text: 'Greer NC Facility',
        value: 'Greer NC Facility',
      }, {
        text: 'HILLS CA Facility',
        value: 'HILLS CA Facility',
      }, {
        text: 'HILLS NY Facility',
        value: 'HILLS NY Facility',
      }, {
        text: 'HILLS TX Facility',
        value: 'HILLS TX Facility',
      }, {
        text: 'Netherlands Facility',
        value: 'Netherlands Facility',
      }, {
        text: 'Portland Facility',
        value: 'Portland Facility',
      }],
    }],
  onFilter: (value, record) => record.facility.indexOf(value) === 0,
}, {
  title: 'Ship Method',
  dataIndex: 'shipMethod',
  width: '100px',
  filters: [
    {
      text: 'Recent',
      value: 'Recent Ship Methods',
      children: [{
        text: 'Standard',
        value: 'Standard',
      }],
    }, {
      text: 'All',
      value: 'All Ship Methods',
      children: [{
        text: '2nd Day',
        value: '2nd Day',
      }, {
        text: 'Ground',
        value: 'Ground',
      }, {
        text: 'Next Day',
        value: 'Next Day',
      }, {
        text: 'Standard',
        value: 'Standard',
      }, {
        text: 'USPS First Class',
        value: 'USPS First Class',
      }],
    }],
  onFilter: (value, record) => record.shipMethod.indexOf(value) === 0,
}, {
  title: 'Order Status',
  dataIndex: 'status',
  width: '150px',
  filters: [
    {
      text: 'Common Statuses',
      value: 'Common Statuses',
      children: [{
        text: 'Fulfillment Processing',
        value: 'Fulfillment Processing',
      }, {
        text: 'Canceled',
        value: 'Canceled',
      }, {
        text: 'CC Auth Declined',
        value: 'CC Auth Declined',
      }],
    }, {
      text: 'All',
      value: 'allStatuses',
      children: [{
        text: 'Canceled',
        value: 'Canceled',
      }, {
        text: 'Fulfillment Ready',
        value: 'Fulfillment Ready',
      }, {
        text: 'Pending Authorization',
        value: 'Pending Authorization',
      }, {
        text: 'Pharmacy',
        value: 'Pharmacy',
      }, {
        text: 'Sent for Fulfillment',
        value: 'Sent for Fulfillment',
      }],
    }],
  onFilter: (value, record) => record.status.indexOf(value) === 0,
  render: text => <Badge status="processing" text={text}/>,
}, {
  title: 'Order Total',
  dataIndex: 'total',
  width: '100px',
  sorter: (a, b) => a.total - b.total,
}];

export const data = [{
  key: '1',
  orderId: '5494685',
  orderNum: '56995',
  orderDate: '04/15/2017',
  dvmId: '6584',
  client: 'Cecilia Pozo',
  platform: 'RoadRunner',
  facility: 'VFC Warehouse',
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
  facility: 'Atlas Facility',
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
  facility: 'VFC Warehouse',
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
  facility: 'Atlas Facility',
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
  facility: 'Atlas Facility',
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
  facility: 'VFC Warehouse',
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
  facility: 'Atlas Facility',
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
  facility: 'VFC Warehouse',
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
  facility: 'Atlas Facility',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '11',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'Atlas Facility',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '12',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'VFC Warehouse',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '13',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'Atlas Facility',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '14',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'VFC Warehouse',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '15',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'Atlas Facility',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '16',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'VFC Warehouse',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '17',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'Atlas Facility',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '18',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'Atlas Facility',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '19',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'Atlas Facility',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '20',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'VFC Warehouse',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '21',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'Atlas Facility',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '22',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'VFC Warehouse',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}, {
  key: '23',
  orderId: '2544152',
  orderNum: '45985',
  orderDate: '06/30/2018',
  dvmId: '0418',
  client: 'Emily Baker',
  platform: 'Vets First Choice',
  facility: 'VFC Warehouse',
  shipMethod: 'USPS',
  status: 'Delayed',
  total: '$120.12',
}];

export const views = (
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
    <br/>
  </Row>
);

export const queues = (
  <Row style={{ background: '#fefefe', padding: '15px 0' }}>
    <ButtonGroup>
      <Button>All Open</Button>
      <Button>My Orders</Button>
      <Button>Fulfillment Processing</Button>
      <Button>Inventory In Motion</Button>
      <Button>Purina Open Orders</Button>
      <Button>Royal Canin Open Orders</Button>
      <Button>Hills Open Orders</Button>
    </ButtonGroup>
    <br/>
  </Row>
);