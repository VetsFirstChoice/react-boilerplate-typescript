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
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { makeSelectLocale } from '../../LanguageProvider/selectors';
import { connect } from 'react-redux';

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale: locale,
}));

export const Orders = ({ locale }) => {

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
              <FormattedMessage id="app.OrderHistory.orderNumber"/>
            </Option>
            <Option value="Option2">
              <FormattedMessage id="app.OrderHistory.clientName"/>
            </Option>
            <Option value="Option3">
              <FormattedMessage id="app.OrderHistory.clientEmail"/>
            </Option>
            <Option value="Option4">
              <FormattedMessage id="app.OrderHistory.DVM_ID"/>
            </Option>
            <Option value="Option5">
              <FormattedMessage id="app.OrderHistory.invoiceNumber"/>
            </Option>
            <Option value="Option6">
              <FormattedMessage id="app.OrderHistory.orderID"/>
            </Option>
            <Option value="Option7">
              <FormattedMessage id="app.OrderHistory.shipOrderNumber"/>
            </Option>
            <Option value="Option8">
              <FormattedMessage id="app.OrderHistory.SKU"/>
            </Option>
            <Option value="Option9">
              <FormattedMessage id="app.OrderHistory.toteNumber"/>
            </Option>
            <Option value="Option10">
              <FormattedMessage id="app.OrderHistory.trackingNumber"/>
            </Option>
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
        <TabPane tab={(
          <span>
            <Icon type="search"/>
            <FormattedMessage id="app.OrderHistory.search"/>
          </span>)} key="1">
          {search}
        </TabPane>
        <TabPane tab={(
          <span>
            <Icon type="bars"/>
            <FormattedMessage id="app.OrderHistory.queues"/>
          </span>)} key="2">
          {queues}
        </TabPane>
        <TabPane tab={(
          <span>
            <Icon type="profile"/>
            <FormattedMessage id="app.OrderHistory.views"/>
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
)(Orders);
