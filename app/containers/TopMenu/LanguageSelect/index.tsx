/*
 * Header
 *
 * This is a navigation bar at the top of the page
 *
 */

// remove, use babel for antD css
import 'antd/dist/antd.css';

import * as React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { CHANGE_LOCALE } from '../../LanguageProvider/constants';
import { createSelector } from 'reselect';
import { makeSelectLocale } from '../../LanguageProvider/selectors';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: locale => dispatch({ type: CHANGE_LOCALE, locale: locale }),
  };
};

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale: locale,
}));

export function LanguageSelect({ changeLocale, locale }) {
  const Option = Select.Option;

  return (
    <Select defaultValue={locale}
            onChange={changeLocale}
            style={{
              float: 'right',
              marginTop: 15,
            }}>
      <Option value={'en'}><FormattedMessage {...messages.english}/></Option>
      <Option value={'fr'}><FormattedMessage {...messages.french}/></Option>
      <Option value={'zh'}><FormattedMessage {...messages.chinese}/></Option>
    </Select>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageSelect);
