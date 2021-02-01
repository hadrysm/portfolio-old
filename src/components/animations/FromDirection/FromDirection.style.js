import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level5};
  overflow: ${({ isOverflow }) => (isOverflow ? 'hidden' : 'visible')};
`;
