import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 80%;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  background-color: ${({ theme }) => theme.white};
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? 'visible' : 'hidden')};
  z-index: ${({ theme }) => theme.zIndex.level9};
  overflow: auto;
  cursor: default;
`;

export const Nav = styled(motion.nav)`
  padding: 4rem 0 4rem 10%;
`;
