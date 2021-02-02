import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
  overflow: ${({ isOverflow }) => (isOverflow ? 'hidden' : 'visible')};
`;

export const MotionWrapper = styled(motion.div)`
  transform-origin: ${({ from }) => `${from} center`};

  ${({ from }) =>
    typeof from === 'number' &&
    css`
      transform-origin: center;
    `}
`;
