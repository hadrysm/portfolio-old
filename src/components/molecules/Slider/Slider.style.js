import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Image } from 'components/atoms/Image/Image';

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin-left: auto;
  max-width: 100rem;
  min-height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  cursor: grab;
`;

export const Img = styled(Image)`
  pointer-events: none;
`;
