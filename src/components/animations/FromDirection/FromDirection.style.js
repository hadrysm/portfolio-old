import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: ${({ isOverflow }) => (isOverflow ? 'hidden' : 'visible')};
`;
