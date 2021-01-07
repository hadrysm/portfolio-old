import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.primary};
  z-index: ${({ theme }) => theme.zIndex.level2};
`;

export const InnerWrapper = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 6rem 3rem;
  z-index: ${({ theme }) => theme.zIndex.level4};
`;

export const Mask = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.headers.xs};
`;
