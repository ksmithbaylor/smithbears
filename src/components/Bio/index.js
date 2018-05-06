import React from 'react';
import styled from 'styled-components';

import { Card } from '../primitives';
import familyPic from './family.jpg';

class Bio extends React.Component {
  render() {
    return (
      <Card topBarContents="our family">
        <img width="100%" src={familyPic} />
      </Card>
    );
  }
}

export default Bio;
