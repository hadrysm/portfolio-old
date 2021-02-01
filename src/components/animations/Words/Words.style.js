import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.span)`
  overflow: ${({ isOverflow }) => (isOverflow ? 'hidden' : 'visible')};
`;

export const Word = styled(motion.span)`
  display: inline-block;
`;
