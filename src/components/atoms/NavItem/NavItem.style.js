import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const ACTIVE_CLASS_NAME = '.active';

export const StyledLink = styled(Link)`
  &${ACTIVE_CLASS_NAME} .mask {
    transform: scale(1) !important;
  }
`;

export const Li = styled(motion.li)`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const Mask = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0.8rem;
  background-color: ${({ theme, colorContext }) => theme.colors[colorContext]};
  opacity: 0.6;
  transform-origin: left;
`;

export const Text = styled.span`
  position: relative;
  display: block;
  padding: 0.5rem 2rem;
  margin-left: -2rem;
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size.body.m};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  z-index: ${({ theme }) => theme.zIndex.level2};
`;
