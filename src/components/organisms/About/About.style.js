import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 6rem auto;
  padding: 0 2rem;
  min-height: 100vh;
`;
