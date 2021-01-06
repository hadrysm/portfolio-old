import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.font.size.body.l};
`;
