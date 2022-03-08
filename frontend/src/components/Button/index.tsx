import React from 'react';
import styled from 'styled-components';
import { TOnSubmit } from '../../../types';

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
  onClick: TOnSubmit;
  children: string;
  value: string;
};

export default function Button({
  children,
  onClick,
  value,
  ...prop
}: TProps) {
  return (
    <StyledButton onClick={() => onClick(value)} {...prop}>
      {children}
    </StyledButton>
  );
}
