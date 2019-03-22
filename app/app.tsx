/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
// import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
// import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from 'i18n';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app') as HTMLElement;

import moment from 'moment';
import 'moment/locale/fr';
import { addLocaleData, IntlProvider } from 'react-intl';
import { LocaleProvider } from 'antd';
import fr_FR from 'antd/lib/locale-provider/fr_FR';

/* Import basic support for another locale if needed
   ('en' is included by default) */
const frLocaleData = require('react-intl/locale-data/fr');
addLocaleData(frLocaleData);

moment.locale('fr');

// export function setLang() {
//   // @ts-ignore
//   lang = fr_FR;
//
//   console.log('here');
// }

// const i18nConfig = {
//   locale: 'fr',
//   messages: {
//     'app.SideMenu.dashboard': 'Tableau de Bord',
//   },
// };

const i18nConfig = {
  locale: 'en',
  messages: {
    'app.SideMenu.dashboard': 'Dashboard',
  },
};

const render = (messages, Component = App) => {

  ReactDOM.render(
    <Provider store={store}>
      {/*<LanguageProvider messages={messages}>*/}
      <LocaleProvider locale={fr_FR}>
        <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}>
          <ConnectedRouter history={history}>
            <App/>
          </ConnectedRouter>
        </IntlProvider>
      </LocaleProvider>
      {/*</LanguageProvider>*/}
    </Provider>,
    MOUNT_NODE,
  );
};

declare const module: any;
if (module.hot) {
  module.hot.accept(['./i18n', './containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    // tslint:disable-next-line:max-line-length
    const App = require('./containers/App').default; // https://github.com/webpack/webpack-dev-server/issues/100
    render(translationMessages, App);
  });
}
// Chunked polyfill for browsers without Intl support
if (!(window as any).Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/de.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
