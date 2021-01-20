import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndex.level11};
`;

export const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  transform-origin: bottom center;
  will-change: background-color;
  transition: background-color 500ms ease-in-out 0ms;
`;

export const LogoWrapper = styled(motion.figure)`
  position: fixed;
  top: calc(50% - 4rem);
  left: calc(50% - 4rem);
  width: 8rem;
  height: 8rem;
  transform-origin: center;
`;
