import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1.2fr 1.4fr;
    grid-template-rows: auto;
  }
`;

export const InnerWrapper = styled.div`
  margin-bottom: 5rem;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 0;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 50rem;
  margin: 0 auto;

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 2rem;
  }
`;
