import React from 'react';
import styled from 'styled-components';

import { Card, Input, Textarea, PrimaryButton } from './primitives';

class MessageForm extends React.Component {
  render() {
    return (
      <Card
        topBarContents="send us a message"
        topBarStyles={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
      >
        <form>
          <label>
            <FieldLabel>Name</FieldLabel>
            <Input name="name" />
          </label>
          <label>
            <FieldLabel>Email</FieldLabel>
            <Input name="email" />
          </label>
          <label>
            <FieldLabel>Message</FieldLabel>
            <Textarea name="message" rows={10} style={{ marginBottom: 0 }} />
          </label>
          <PrimaryButton type="submit" style={{ marginTop: '0.5em' }}>
            Send
          </PrimaryButton>
        </form>
      </Card>
    );
  }
}

const FieldLabel = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  opacity: 0.9;

  &::after {
    content: ' (required)';
    font-weight: normal;
    opacity: 0.7;
  }
`;

export default MessageForm;
