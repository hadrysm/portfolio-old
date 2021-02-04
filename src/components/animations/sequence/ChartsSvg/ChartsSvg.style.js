import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.primary};

  ${({ theme }) => theme.mq.bigTablet} {
    display: block;
  }
`;
