import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 70%;
  max-width: 50rem;
  z-index: ${({ theme }) => theme.zIndex.level9};
  overflow: auto;
  cursor: default;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 4rem 0 4rem 10%;
  background-color: ${({ theme }) => theme.white};
`;
