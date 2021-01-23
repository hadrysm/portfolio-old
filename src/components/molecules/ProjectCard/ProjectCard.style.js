import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled(motion.article)`
  width: 100%;
  position: relative;
  padding-bottom: 70%;
  border-radius: 1rem;
  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 4rem;
  right: 4rem;
  z-index: ${({ theme }) => theme.zIndex.level1};
`;

export const Headline = styled.h3`
  font-size: ${({ theme }) => theme.font.size.headers.xs};
  color: ${({ theme }) => theme.white};
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) => `radial-gradient(circle, ${theme.main} 0%, ${theme.black})`};
    opacity: 0.4;
  }
`;

export const Mask = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme, pageTheme }) => pageTheme || theme.primary};
  opacity: 0.7;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.body.xs};
  font-style: italic;

  color: ${({ theme }) => theme.white};
  margin: 0 0 1rem 0;
`;
