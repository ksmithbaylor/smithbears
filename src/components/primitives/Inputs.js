import styled from 'styled-components';

export const Input = styled.input.attrs({
  type: 'text'
})`
  margin: 0;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  width: 100%;
  font-size: 0.8rem;
  border: 1px solid #ccc;
  padding: 0.25rem;
  border-radius: 3px;
`;

export const Textarea = Input.withComponent('textarea');
