import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.article)`
  width: 100%;
  padding-bottom: 70%;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`;

export const InnerWrapper = styled(motion.div)`
  position: absolute;
  bottom: 5rem;
  left: 4rem;
  right: 4rem;
  z-index: ${({ theme }) => theme.zIndex.level1};
`;

export const ImageWrapper = styled(motion.div)`
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
  width: 100%;
  height: 100%;
  background-color: ${({ theme, pageTheme }) => pageTheme || theme.primary};
  opacity: 0.7;
`;
