import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const base = css`
  color: ${({ theme, color }) => theme[color] || theme.text};

  ${({ isItalic }) =>
    isItalic &&
    css`
      font-style: italic;
      font-weight: ${({ theme }) => theme.font.weight.light};
    `}

  ${({ isBold }) =>
    isBold &&
    css`
      font-weight: ${({ theme }) => theme.font.weight.bold};
    `}  

    ${({ isUpper }) =>
    isUpper &&
    css`
      text-transform: uppercase;
    `}
`;

export const Txt = styled(motion.p)`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size.body.s};
  letter-spacing: 0.5px;
  ${base};

  ${({ theme }) => theme.mq.bigTablet} {
    font-size: ${({ theme }) => theme.font.size.body.m};
  }

  ${({ isSmall }) =>
    isSmall &&
    css`
      font-size: ${({ theme }) => theme.font.size.body.xs};

      ${({ theme }) => theme.mq.bigTablet} {
        font-size: ${({ theme }) => theme.font.size.body.s};
      }
    `}

  ${({ isMedium }) =>
    isMedium &&
    css`
      font-size: ${({ theme }) => theme.font.size.body.m};

      ${({ theme }) => theme.mq.bigTablet} {
        font-size: ${({ theme }) => theme.font.size.body.l};
      }
    `}

    ${({ isBig }) =>
    isBig &&
    css`
      font-size: ${({ theme }) => theme.font.size.body.xl};

      ${({ theme }) => theme.mq.bigTablet} {
        font-size: ${({ theme }) => theme.font.size.body.xxl};
      }
    `}
`;

export const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.font.size.headers.xl};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: 1px;
  ${base};

  ${({ theme }) => theme.mq.bigTablet} {
    font-size: ${({ theme }) => theme.font.size.headers.xxl};
  }

  ${({ isSmall }) =>
    isSmall &&
    css`
      font-size: ${({ theme }) => theme.font.size.headers.xs};

      ${({ theme }) => theme.mq.bigTablet} {
        font-size: ${({ theme }) => theme.font.size.headers.s};
      }
    `}

  ${({ isMedium }) =>
    isMedium &&
    css`
      font-size: ${({ theme }) => theme.font.size.headers.m};

      ${({ theme }) => theme.mq.bigTablet} {
        font-size: ${({ theme }) => theme.font.size.headers.l};
      }
    `}
`;
