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
import Order from 'components/order-component';

/* eslint-disable react/prefer-stateless-function */
export default class OrderPage extends React.PureComponent {
  private columns: any = [];
  private data = [];

  public render() {
    return (
      <Order columns={this.columns} data={this.data}/>
    );
  }
}

