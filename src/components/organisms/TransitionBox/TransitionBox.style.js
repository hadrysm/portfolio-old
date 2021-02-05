import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndex.level11};
  display: flex;
`;

export const Box = styled(motion.div)`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.primary};
  transform-origin: bottom center;
  will-change: background-color;
  transition: background-color 400ms ease-in-out 0ms;
`;
