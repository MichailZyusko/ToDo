import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 50px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Tasks</h1>
    </HeaderContainer>
  );
}
