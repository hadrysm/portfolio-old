import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  margin-top: 5rem;
`;

export const Form = styled(motion.form)`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
