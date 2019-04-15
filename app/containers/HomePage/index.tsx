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
  const [fsToggleState, setFsState]  = React.useState(false);
  const doStuff = () => {
    setFsState(!fsToggleState);
    // console.log('fsToggleState value: ', fsToggleState);
  };

  return (
    <div>
      <FormattedMessage {...messages.header}/>
      <div>
        <Checkbox
          checked={fsToggleState}
          onClick={doStuff}
        >Feature switch <span style={{display: fsToggleState ? 'inline-block' : 'none'}}>enabled</span>
        </Checkbox>
      </div>
    </div>
  );
}
