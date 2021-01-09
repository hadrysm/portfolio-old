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
  transition: background-color 500ms cubic-bezier(0.5, 0, 0, 0.5) 0ms;
`;

export const LogoWrapper = styled(motion.figure)`
  position: fixed;
  top: calc(50% - 7.5rem);
  left: calc(50% - 7.5rem);
  width: 15rem;
  height: 15rem;
  transform-origin: center;
`;
