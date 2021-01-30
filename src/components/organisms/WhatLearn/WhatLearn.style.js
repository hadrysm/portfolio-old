import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 4rem 0;
`;

export const Grid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
  }
`;
