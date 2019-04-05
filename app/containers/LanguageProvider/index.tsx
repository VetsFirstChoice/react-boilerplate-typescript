/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';
import { LocaleProvider } from 'antd';
import fr_FR from 'antd/lib/locale-provider/fr_FR';
import en_US from 'antd/lib/locale-provider/en_US';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

export interface ILanguageProviderProps {
  locale?: string;
  messages: { [locale: string]: { [id: string]: string } };
  children?: React.ReactNode;
}

export class LanguageProvider extends React.PureComponent<ILanguageProviderProps, {}> {

  public getLocale() {
    switch (this.props.locale) {
      case 'fr':
        return fr_FR;
      case 'zh':
        return zh_CN;
      default:
        return en_US;
    }
  }

  public render() {

    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={this.props.messages[this.props.locale as string]}
      >
        <LocaleProvider locale={this.getLocale()}>
          {React.Children.only(this.props.children)}
        </LocaleProvider>
      </IntlProvider>
    );
  }
}

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale: locale,
}));

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageProvider);
