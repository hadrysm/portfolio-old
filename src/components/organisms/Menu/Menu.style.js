import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 90%;
  max-width: 25rem;
  background-color: pink;
  z-index: ${({ theme }) => theme.zIndex.level7};
`;

export const InnerWrapper = styled.div`
  padding: 4rem 2rem;
`;
