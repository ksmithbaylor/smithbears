import React from 'react';
import styled from 'styled-components';

export class Card extends React.Component {
  render() {
    return (
      <Container>
        <TopBar style={this.props.topBarStyles}>
          {this.props.topBarContents}
        </TopBar>
        <Body style={this.props.bodyStyles}>{this.props.children}</Body>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%
  margin-bottom: 2rem;
  font-family: sans-serif;
`;

const TopBar = styled.div`
  background-color: #6eb267;
  color: white;
  font-family: 'Roboto Slab', serif;
  font-size: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0.5rem 1rem;
  display: inline-block;
  line-height: normal;
  width: 100%;
`;

const Body = styled.div`
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0.5rem;
`;
