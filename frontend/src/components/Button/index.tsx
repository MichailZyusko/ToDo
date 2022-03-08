import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 180px;
  height: 50px;

  background: rgba(24, 190, 70, 0.7);
  box-shadow: 4px 8px 20px rgba(109, 198, 134, 0.7);
  backdrop-filter: blur(4px);
  color: #FFFFFF;
  
  border-radius: 30px;
  cursor: pointer;
  
  font-size: 1.2rem;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  border: none;
`;

type TProps = {
  children: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (value: string) => void;
};

export default function Button({
  children, value, onSubmit, ...prop
}: TProps) {
  return (
    <StyledButton onClick={() => onSubmit(value)} {...prop}>
      {children}
    </StyledButton>
  );
}
