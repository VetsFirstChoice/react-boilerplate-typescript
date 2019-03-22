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
import en_US from 'antd/lib/locale-provider/en_US';

const frLocaleData = require('react-intl/locale-data/fr');
addLocaleData(frLocaleData);

moment.locale('fr');

const i18nConfigFR = {
  locale: 'fr',
  messages: {
    'app.SideMenu.dashboard': 'Tableau de Bord',
    'app.SideMenu.orders': 'Ordres',
    'app.OrderHistory.clientName': 'Nom du Client',
    'app.OrderHistory.clientEmail': 'Email du Client',
    'app.OrderHistory.DVM_ID': 'DVM ID',
    'app.OrderHistory.invoiceNumber': 'Facture d\' Achat #',
    'app.OrderHistory.orderID': 'Ordre ID',
    'app.OrderHistory.shipOrderNumber': 'Envoi de la Commande',
    'app.OrderHistory.SKU': 'SKU',
    'app.OrderHistory.orderNumber': 'Ordre #',
    'app.OrderHistory.toteNumber': 'Fourre-Tout #',
    'app.OrderHistory.trackingNumber': 'Suivi #',
    'app.OrderHistory.search': 'Chercher',
    'app.OrderHistory.queues': 'Les Files d\' Attente',
    'app.OrderHistory.views': 'Vues',
    'app.OrderHistory.orderDate': 'Date de Commande',
    'app.OrderHistory.client': 'Client',
    'app.OrderHistory.platform': 'Plate-Forme',
    'app.OrderHistory.facility': 'Établissement',
    'app.OrderHistory.shipMethod': 'Méthode d\' Envoi',
    'app.OrderHistory.orderStatus': 'Statut de la Commande',
    'app.OrderHistory.orderTotal': 'Total de la Commande',
  },
};

// const i18nConfigEN = {
//   locale: 'en',
//   messages: {
//     'app.SideMenu.dashboard': 'Dashboard',
//     'app.SideMenu.orders': 'Orders',
//     'app.OrderHistory.clientName': 'Client Name',
//     'app.OrderHistory.clientEmail': 'Client Email',
//     'app.OrderHistory.DVM_ID': 'DVM ID',
//     'app.OrderHistory.invoiceNumber': 'Invoice $',
//     'app.OrderHistory.orderID': 'Order ID',
//     'app.OrderHistory.shipOrderNumber': 'Ship Order $',
//     'app.OrderHistory.SKU': 'SKU',
//     'app.OrderHistory.orderNumber': 'Order #',
//     'app.OrderHistory.toteNumber': 'Tote #',
//     'app.OrderHistory.trackingNumber': 'Tracking #',
//     'app.OrderHistory.search': 'Search',
//     'app.OrderHistory.queues': 'Queues',
//     'app.OrderHistory.views': 'Views',
//     'app.OrderHistory.orderDate': 'Order Date',
//     'app.OrderHistory.client': 'Client',
//     'app.OrderHistory.platform': 'Platform',
//     'app.OrderHistory.facility': 'Facility',
//     'app.OrderHistory.shipMethod': 'Ship Method',
//     'app.OrderHistory.orderStatus': 'Order Status',
//     'app.OrderHistory.orderTotal': 'Order Total',
//   },
// };

const i18nConfig = i18nConfigFR;
const render = (messages, Component = App) => {

  const locale = () => {
    if (i18nConfig.locale === 'en') {
      return en_US;
    }
    if (i18nConfig.locale === 'fr') {
      return fr_FR;
    }
    return en_US;
  };


  ReactDOM.render(
    <Provider store={store}>
      {/*<LanguageProvider messages={messages}>*/}
      <LocaleProvider locale={locale()}>
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
