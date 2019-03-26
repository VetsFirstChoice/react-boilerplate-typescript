/*
 * Header
 *
 * This is a navigation bar at the top of the page
 *
 */

// remove, use babel for antD css
import 'antd/dist/antd.css';

import * as React from 'react';
import { Layout, Affix, Select } from 'antd';
import { connect } from 'react-redux';
import { CHANGE_LOCALE } from '../LanguageProvider/constants';
import { createSelector } from 'reselect';
import { makeSelectLocale } from '../LanguageProvider/selectors';

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: locale => dispatch({ type: CHANGE_LOCALE, locale: locale }),
  };
};

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale: locale,
}));

export function TopMenu({ changeLocale, locale }) {
  const { Header } = Layout;
  const Option = Select.Option;

  return (
    <Affix>
      <Header style={{ background: '#fff' }}>
        <Select defaultValue={locale}
                onChange={changeLocale}
                style={{
                  float: 'right',
                  marginTop: 10,
                }}>
          <Option value={'en'}>English</Option>
          <Option value={'fr'}>French</Option>
        </Select>
      </Header>
    </Affix>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopMenu);
