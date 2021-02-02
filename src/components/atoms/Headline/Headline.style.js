import styled, { css } from 'styled-components';

import { Text } from 'components/atoms/Text/Text';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const StyledText = styled(Text)`
  margin: 2rem 0;
  color: inherit;

  ::first-letter {
    text-transform: uppercase;
  }
`;

/* ${({ isBig }) =>
  isBig &&
  css`
    font-size: ${({ theme }) => theme.font.size.headers.xl};

    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.headers.xl};
    }

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.font.size.headers.xxl};
    }
  `} */
