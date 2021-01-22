import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import { Content } from 'components/atoms/Content/Content';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    background-image: linear-gradient(
      40deg,
      ${({ theme }) => theme.primary} 20%,
      ${({ theme }) => lighten(0.1, theme.primary)} 70%
    );
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.headers.xxl};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  ${({ withLine }) =>
    withLine &&
    css`
      ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -1rem;
        width: 2px;
        height: 100%;
        background-color: ${({ theme }) => theme.white};
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      ${({ theme }) => theme.mq.tablet} {
        max-width: 65rem;
        flex: 1;
      }
    `}
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.white};
  max-width: 40rem;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 35rem;
  }
`;

export const StyledContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
