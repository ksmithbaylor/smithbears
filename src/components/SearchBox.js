import React from 'react';
import styled from 'styled-components';

import { Input } from './primitives';

class SearchBox extends React.Component {
  render() {
    return (
      <Container>
        <SearchInput />
      </Container>
    );
  }
}

const SearchInput = styled(Input).attrs({
  placeholder: 'Search...'
})`
  width: calc(100% - (2 * 8px));
  margin: 0.5rem;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export default SearchBox;
