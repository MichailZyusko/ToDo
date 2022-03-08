import styled from 'styled-components';

export default styled.img.attrs((props) => ({
  ...props,
}))`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
