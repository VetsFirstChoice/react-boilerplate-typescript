/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopBar from '../TopBar';
import Menu from '../Menu';
// import Orders from '../Orders';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  public render() {
    const menu = (
      <Menu isOpen={true}/>
    );
    //
    // const content = (
    //   <Orders/>
    // );

    return (
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <TopBar isOpen={true}/>
          </Col>
        </Row>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2}>
            {menu}
          </Col>
          <Col>
            {/*{content}*/}
          </Col>
        </Row>
      </Container>
    );
  }
}
