import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.46);
  box-shadow: 5px 10px 20px rgba(173, 173, 173, 0.46);
  backdrop-filter: blur(8px);
  
  width: 35%;
  height: 20vh; 
  padding: 20px;

  border-radius: 50px;
  
  @media (max-width: 768px) {
    width: 70%;
  }
`;
