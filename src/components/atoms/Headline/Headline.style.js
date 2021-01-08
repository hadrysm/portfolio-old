import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
`;

export const Text = styled.h3`
  margin-top: 3rem;
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.font.size.headers.l};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: 1px;

  ::first-letter {
    text-transform: uppercase;
  }
`;
