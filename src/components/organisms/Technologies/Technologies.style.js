import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  margin: 7rem auto 0;
  background-color: ${({ theme }) => theme.secondary};
`;

export const InnerWrapper = styled.div`
  padding: 6rem 3rem;
`;
