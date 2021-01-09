import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
  color: ${({ theme }) => theme.white};

  svg {
    fill: inherit;
  }

  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.primary};
    `}
`;

export const Text = styled.h3`
  margin: 3rem 0;
  color: inherit;
  font-size: ${({ theme }) => theme.font.size.headers.l};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: 1px;

  ::first-letter {
    text-transform: uppercase;
  }
`;
