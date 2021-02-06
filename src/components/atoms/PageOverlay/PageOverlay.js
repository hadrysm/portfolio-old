import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.level4};
  backdrop-filter: grayscale(100%);
  cursor: pointer;
`;
