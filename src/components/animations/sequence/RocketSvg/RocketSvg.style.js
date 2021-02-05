import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
    height: 100%;
  }
`;
