import React from 'react';
import styled from 'styled-components';

import { Card } from './primitives';

const years = Array.from(Array(9)).map((_, i) => i + 2010);

class Years extends React.Component {
  render() {
    return (
      <Card topBarContents="by year">
        <YearList>{years.map(year => <Year key={year}>{year}</Year>)}</YearList>
      </Card>
    );
  }
}

const YearList = styled.ul`
  margin: 0.5rem 0;
`;

const Year = styled.li.attrs({
  children: props => <a href={'#' + props.children}>{props.children}</a>
})`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;

  &,
  a,
  a:visited {
    color: #9b6745;
  }
`;

export default Years;
