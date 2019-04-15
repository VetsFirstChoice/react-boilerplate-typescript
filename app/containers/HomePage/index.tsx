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

export default function HomePage() {
  const [ABTestingState, setABTestingState] = React.useState(false);
  const toggleABTestingState = () => {
    setABTestingState(!ABTestingState);
  };
  return (
    <div>
      <FormattedMessage {...messages.header}/>
      <br />
      <span>Choose: </span>
      <Checkbox checked={ABTestingState} onChange={toggleABTestingState}>
        <span style={{display: !ABTestingState ? 'inline-block' : 'none'}}> either A</span>
        <span style={{display: ABTestingState ? 'inline-block' : 'none'}}> or B</span>
      </Checkbox>
    </div>
  );
}
