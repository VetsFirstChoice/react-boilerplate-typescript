/*
 * sortTable
 *
 * This is a table, with filters
 *
 */

// remove, use babel for antD css
import 'antd/dist/antd.css';
import { Table, Button, Row, Select, Input, DatePicker, Col, Tabs, Icon } from 'antd';
import React, { useEffect, useState } from 'react';
import { columns, views, queues } from './constants';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import messages from './messages';
import axios from 'axios';

const mapStateToProps = state => ({
  locale: state.language.locale,
});

export const OrderSearch = ({ locale }) => {

  const [data, setData] = useState([]);
  const [searchOrder, setSearchOrder] = useState('');
  const [searchOrderInput, setSearchOrderInput] = useState('');

  // Get the data when the Orders container mounts.
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://5cb4af30bbf7b50014cabc3a.mockapi.io/api/orders',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  // Get the data with input parameter when the search button is clicked.
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://5cb4af30bbf7b50014cabc3a.mockapi.io/api/orders/${searchOrder}`,
      );
      setData(result.data);
    };
    fetchData();
  }, [searchOrder]);

  const InputGroup = Input.Group;
  const Option = Select.Option;
  const { RangePicker } = DatePicker;
  const dateFormat = 'DD/MM/YYYY';
  const TabPane = Tabs.TabPane;

  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  const search = (
    <Row style={{ background: '#fefefe', padding: '15px 0' }}>
      <Col span={8}>
        <InputGroup compact>
          <Select defaultValue="Option1" style={{ width: 150 }}>
            <Option value="Option1">
              <FormattedMessage {...messages.orderNumber}/>
            </Option>
            <Option value="Option2">
              <FormattedMessage {...messages.clientName}/>
            </Option>
            <Option value="Option3">
              <FormattedMessage {...messages.clientEmail}/>
            </Option>
            <Option value="Option4">
              <FormattedMessage {...messages.DVM_ID}/>
            </Option>
            <Option value="Option5">
              <FormattedMessage {...messages.invoiceNumber}/>
            </Option>
            <Option value="Option6">
              <FormattedMessage {...messages.orderID}/>
            </Option>
            <Option value="Option7">
              <FormattedMessage {...messages.shipOrderNumber}/>
            </Option>
            <Option value="Option8">
              <FormattedMessage {...messages.SKU}/>
            </Option>
            <Option value="Option9">
              <FormattedMessage {...messages.toteNumber}/>
            </Option>
            <Option value="Option10">
              <FormattedMessage {...messages.trackingNumber}/>
            </Option>
          </Select>
          <Input style={{ width: '50%' }} onChange={event => setSearchOrderInput(event.target.value)}/>
          <Button icon="search" shape="circle-outline" onClick={() => {
            setSearchOrder(searchOrderInput);
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
        <TabPane tab={(
          <span>
            <Icon type="search"/>
            <FormattedMessage {...messages.search}/>
          </span>)} key="1">
          {search}
        </TabPane>
        <TabPane tab={(
          <span>
            <Icon type="bars"/>
            <FormattedMessage {...messages.queues}/>
          </span>)} key="2">
          {queues}
        </TabPane>
        <TabPane tab={(
          <span>
            <Icon type="profile"/>
            <FormattedMessage {...messages.views}/>
          </span>)} key="3">
          {views}
        </TabPane>
      </Tabs>
      <Table columns={columns(locale)} dataSource={data} onChange={onChange}/>
    </div>
  );
};

export default connect(
  mapStateToProps,
)(OrderSearch);
