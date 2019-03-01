/*
 * sortTable
 *
 * This is a table, with filters
 *
 */

// remove, use babel for antD css
import 'antd/dist/antd.css';
import { Table } from 'antd';
import * as React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class SortTable extends React.PureComponent {
  public render() {
    const columns: any = [{
      title: 'Order ID',
      dataIndex: 'orderId',
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
      sorter: (a, b) => a.orderNum - b.orderNum,
    }, {
      title: 'Order Date',
      dataIndex: 'orderDate',
      sorter: (a, b) => a.orderDate - b.orderDate,
    }, {
      title: 'DVM ID',
      dataIndex: 'dvmId',
      sorter: (a, b) => a.dvmId - b.dvmId,
    }, {
      title: 'Client',
      dataIndex: 'client',
    }, {
      title: 'Platform',
      dataIndex: 'platform',
    }, {
      title: 'Ship Method',
      dataIndex: 'shipMethod',
    }, {
      title: 'Order Status',
      dataIndex: 'status',
    }, {
      title: 'Order Total',
      dataIndex: 'total',
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
      key: '4',
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

    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    );
  }
}

