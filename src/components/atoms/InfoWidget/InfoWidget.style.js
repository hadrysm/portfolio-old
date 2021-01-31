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
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  background-color: ${({ theme }) => theme.green};

  ${({ status }) =>
    status === 400 &&
    css`
      background-color: ${({ theme }) => theme.red};
    `}
`;
