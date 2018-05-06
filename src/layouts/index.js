import React from 'react';
import Link from 'gatsby-link';
import styled, { injectGlobal } from 'styled-components';

import Title from '../components/Title';

class Template extends React.Component {
  render() {
    return (
      <Container>
        <Title />
        {this.props.children()}
      </Container>
    );
  }
}

injectGlobal`
  body {
    background-color: #c2e2bf;
  }

  * {
    box-sizing: border-box;
  }
`;

const Container = styled.main`
  margin: 0 auto;
  max-width: 920px;
  padding-top: 1rem;
`;

export default Template;
