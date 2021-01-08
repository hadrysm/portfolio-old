import styled from 'styled-components';

const PageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.level8};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  cursor: pointer;
`;

export default PageOverlay;
