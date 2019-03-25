/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

export default function HomePage() {
  return (
    <div>
      <FormattedMessage id="app.HomePage"/>
    </div>
  );
}

