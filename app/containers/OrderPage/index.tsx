/*
 * OrderPage
 *
 * This is the order page of our App, at the '/orders' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import SortTable from 'components/sortTable';

/* eslint-disable react/prefer-stateless-function */
export default class OrderPage extends React.PureComponent {
  public render() {
    return (
      <SortTable />
    );
  }
}

