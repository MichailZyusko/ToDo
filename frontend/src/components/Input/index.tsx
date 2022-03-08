import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: 'text',
  ...props,
}))`
  width: 75%;
  height: 60px;
  border: none;
  padding: 0 20px;
  font-size: 1.2em;
  background: #D8D8D8;
  border-radius: 30px;

  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  margin-bottom: 20px;
`;

type TProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
};

export default function TextInput({ onChange, ...props }: TProps) {
  return (
    <Input {...props} onChange={onChange} />
  );
}
