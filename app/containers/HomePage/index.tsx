/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Checkbox } from 'antd';
import { FeatureSwitch } from './constants';

export default function HomePage() {
  return (
    <div>
      <FormattedMessage {...messages.header}/>
      <div>
        <Checkbox>Feature switch
          <span style={{display: FeatureSwitch.feature ? 'inline-block' : 'none'}}> enabled.</span>
        </Checkbox>
      </div>
    </div>
  );
}
