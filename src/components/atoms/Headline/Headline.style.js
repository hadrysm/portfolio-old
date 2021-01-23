import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  align-self: flex-start;

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
  margin: 2rem 0;
  color: inherit;
  font-size: ${({ theme }) => theme.font.size.headers.m};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: 1px;

  ::first-letter {
    text-transform: uppercase;
  }

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.headers.l};
  }

  ${({ isBig }) =>
    isBig &&
    css`
      font-size: ${({ theme }) => theme.font.size.headers.xl};

      ${({ theme }) => theme.mq.phone} {
        font-size: ${({ theme }) => theme.font.size.headers.xl};
      }

      ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.font.size.headers.xxl};
      }
    `}
`;
