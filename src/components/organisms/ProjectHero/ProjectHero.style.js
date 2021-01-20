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

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 40rem;
    margin: 0 auto;
  }
`;

export const Text = styled(Paragraph)`
  color: ${({ theme }) => theme.white};
  max-width: 40rem;
  margin: 0 0 2rem;
  font-size: ${({ theme }) => theme.font.size.body.s};

  ${({ isItalic }) =>
    isItalic &&
    css`
      font-style: italic;
      margin-bottom: 4rem;
    `}
  ${({ theme }) => theme.mq.tablet} {
    max-width: 35rem;
    font-size: ${({ theme }) => theme.font.size.body.m};
  }
`;

export const StyledContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
