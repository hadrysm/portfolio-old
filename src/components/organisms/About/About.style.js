import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 6rem auto;
  padding: 0 3rem;
`;

export const InnerWrapper = styled.div`
  margin-bottom: 3rem;
`;
