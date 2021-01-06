import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 90%;
  max-width: 25rem;
  background-color: white;
  z-index: ${({ theme }) => theme.zIndex.level7};
`;

export const Nav = styled(motion.nav)`
  padding: 4rem 2rem;
`;
