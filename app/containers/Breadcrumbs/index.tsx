/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import * as React from 'react';
import { Breadcrumb } from 'antd';
import history from 'utils/history';
import { Link } from 'react-router-dom';

const bcStyle = {
  fontWeight: 'bold' as 'bold',
};


export default function Breadcrumbs() {
  // Cut out first item because it is undefined.
  const path = history.location.pathname.split('/').slice(1);

  return (
    <Breadcrumb style={bcStyle}>
      <Breadcrumb.Item>
        <Link to={'/'}>Home</Link>
      </Breadcrumb.Item>
      {
        path.map((item) => {
          return (
            <Breadcrumb.Item>
              <Link to={'/' + item}>
                {item}
              </Link>
            </Breadcrumb.Item>
          );
        })
      }
    </Breadcrumb>
  );
}
