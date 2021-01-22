import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.level8};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  backdrop-filter: grayscale(100%);
  cursor: pointer;
`;

export { PageOverlay };
