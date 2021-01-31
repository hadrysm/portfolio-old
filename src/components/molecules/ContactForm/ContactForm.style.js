import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Spinner } from 'components/atoms/Spinner/Spinner';

export const Form = styled(motion.form)`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;
`;

export const StyledSpinner = styled(Spinner)`
  margin-bottom: 1rem;
`;
