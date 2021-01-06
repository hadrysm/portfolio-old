import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 70%;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  background-color: ${({ theme }) => theme.white};
  z-index: ${({ theme }) => theme.zIndex.level7};
`;

export const Nav = styled(motion.nav)`
  padding: 4rem 20% 4rem 10%;
`;
