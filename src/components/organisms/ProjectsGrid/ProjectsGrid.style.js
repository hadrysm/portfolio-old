import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, minmax(20rem, 1fr));
  gap: 2.5rem;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }

  ${({ theme }) => theme.mq.bigTablet} {
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;
