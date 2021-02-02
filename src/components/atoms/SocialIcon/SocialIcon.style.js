import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.font.size.body.l};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.body.xl};
  }
`;
