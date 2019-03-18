/*
 * sortTable
 *
 * This is a table, with filters
 *
 */

// remove, use babel for antD css
import 'antd/dist/antd.css';
import { Table, Button, Row, Select, Input, DatePicker, Col, Tabs, Icon } from 'antd';
import * as React from 'react';
import { data, columns, views, queues } from './constants';

export default function Orders() {

  const InputGroup = Input.Group;
  const Option = Select.Option;
  const dateFormat = 'DD/MM/YYYY';
  const TabPane = Tabs.TabPane;

  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  const { RangePicker } = DatePicker;

  const search = (
    <Row style={{ background: '#fefefe', padding: '15px 0' }}>
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
          <Input style={{ width: '50%' }}/>
          <Button icon="search" shape="circle-outline" onClick={() => {
          }}/>
        </InputGroup>
      </Col>
      <Col span={12}>
        <InputGroup compact>
          <RangePicker format={dateFormat}/>
          <Button icon="search" shape="circle-outline"/>
        </InputGroup>
      </Col>
      <br/>
    </Row>
  );

  return (
    <div>
      <Tabs defaultActiveKey="1" style={{ height: '135px' }}>
        <TabPane tab={<span><Icon type="search"/>Search</span>} key="1">
          {search}
        </TabPane>
        <TabPane tab={<span><Icon type="eye"/>Views</span>} key="2">
          {views}
        </TabPane>
        <TabPane tab={<span><Icon type="profile"/>Queues</span>} key="3">
          <Row style={{ background: '#fefefe', padding: '15px 0' }}>
            {queues}
          </Row>
        </TabPane>
      </Tabs>
      <Table columns={columns} dataSource={data} onChange={onChange}/>
    </div>
  );
}
