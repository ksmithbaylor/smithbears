import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import 'typeface-roboto-slab';

class Title extends React.Component {
  render() {
    return (
      <Header>
        <StyledLink to="/">the smith family</StyledLink>
      </Header>
    );
  }
}

const Header = styled.header`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  font-family: 'Roboto Slab', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  color: #fff;
  letter-spacing: -1px;
  text-decoration: none;
`;

export default Title;
