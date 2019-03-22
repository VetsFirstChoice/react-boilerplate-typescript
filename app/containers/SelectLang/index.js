import React from 'react';
import { Menu, Icon } from 'antd';
// import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
// import styles from './index.less';

export default function SelectLang() {
  // changeLang = ({ key }) => {
  //   setLocale(key);
  // };

  // const { className } = this.props;
  // const selectedLang = getLocale();
  const locales = ['zh-CN', 'zh-TW', 'en-US', 'pt-BR'];
  const languageLabels = {
    'zh-CN': '简体中文',
    'zh-TW': '繁体中文',
    'en-US': 'English',
    'pt-BR': 'Português',
  };
  const languageIcons = {
    'zh-CN': '🇨🇳',
    'zh-TW': '🇭🇰',
    'en-US': '🇬🇧',
    'pt-BR': '🇧🇷',
  };
  const langMenu = (
    <Menu
    // className={styles.menu}
    // selectedKeys={[selectedLang]}
    // onClick={this.changeLang}
    >
      {locales.map(locale => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{' '}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <HeaderDropdown overlay={langMenu} placement="bottomRight">
      <span>
        <Icon type="global" title="English" />
      </span>
    </HeaderDropdown>
  );
}
