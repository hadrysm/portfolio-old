import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled(motion.li)`
  margin-right: 0.5rem;
  padding: 0 1rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.secondary};
  color: ${({ theme }) => theme.grey100};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.text};
    `}
`;
