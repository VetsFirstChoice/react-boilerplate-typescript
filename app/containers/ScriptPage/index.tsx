/*
 * ScriptPage
 *
 * This is the script page of our App, at the '/scripts' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class ScriptPage extends React.PureComponent {
  public render() {
    return (
      <div>Script</div>
    );
  }
}

