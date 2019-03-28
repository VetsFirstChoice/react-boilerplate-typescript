/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
import detectBrowserLanguage from 'detect-browser-language';
import moment from 'moment';
import numeral from 'numeral';
import { enCurrencyLocale, frCurrencyLocale, zhCurrencyLocale } from './translations/currency';
import { frDateFormat, zhDateFormat } from './translations/datetime';

const addLocaleData = require('react-intl').addLocaleData;
const enLocaleData = require('react-intl/locale-data/en');
const frLocaleData = require('react-intl/locale-data/fr');
const zhLocaleData = require('react-intl/locale-data/zh');

const enTranslationMessages = require('./translations/en.json');
const frTranslationMessages = require('./translations/fr.json');
const zhTranslationMessages = require('./translations/zh.json');

// App Locale Global Identifiers
export const DEFAULT_LOCALE = getDefaultBrowserLocale();
export const appLocales = [
  'en',
  'fr',
  'zh',
];

// Load React-Intl Locale Data
addLocaleData(enLocaleData);
addLocaleData(frLocaleData);
addLocaleData(zhLocaleData);

// Load Moment Date and Time Locale Data
moment.updateLocale('fr', frDateFormat);
moment.updateLocale('zh', zhDateFormat);

// Load Numeral Currency Locale Data
numeral.register('locale', 'en-US', enCurrencyLocale);
numeral.register('locale', 'fr', frCurrencyLocale);
numeral.register('locale', 'zh', zhCurrencyLocale);


function getDefaultBrowserLocale() {
  const browserLocaleMap = {
    'en-US': 'en',
    'fr-FR': 'fr',
    'zh-ZH': 'zh',
  };
  return browserLocaleMap[detectBrowserLanguage()];
}

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return { ...formattedMessages, [key]: formattedMessage };
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
  zh: formatTranslationMessages('fr', zhTranslationMessages),
};
