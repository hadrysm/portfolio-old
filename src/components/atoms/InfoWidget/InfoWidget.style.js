import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Widget = styled(motion.aside)`
  position: fixed;
  top: 15%;
  left: 0;
  padding: 2rem 4rem;
  min-width: 30rem;
  max-width: 80%;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  z-index: ${({ theme }) => theme.zIndex.level1};
  background-color: ${({ theme }) => theme.green};

  ${({ status }) =>
    status === 400 &&
    css`
      background-color: ${({ theme }) => theme.red};
    `}
`;
