import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  padding: 3rem 2rem;
  margin: 0 auto;
  z-index: ${({ theme }) => theme.zIndex.level7};
`;
