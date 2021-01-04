import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BurgerButton = styled(motion.button)`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Line = styled(motion.span)`
  display: block;
  width: 2rem;
  height: 2px;
  margin-bottom: 2px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 2px;
  transform-origin: right;
`;
