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
// import Menu from '../Menu';
// import Orders from '../Orders';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  public render() {
    // const menu = (
    //   <Menu/>
    // );
    //
    // const content = (
    //   <Orders/>
    // );

    return (
      <Container>
        <Row>
          <Col>
            <TopBar isOpen={false}/>
          </Col>
        </Row>
        <Row>
          <Col>
            {/*{menu}*/}
          </Col>
          <Col>
            {/*{content}*/}
          </Col>
        </Row>
      </Container>
    );
  }
}
