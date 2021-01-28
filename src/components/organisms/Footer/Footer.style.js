import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.main};
  background-image: linear-gradient(
    40deg,
    ${({ theme }) => theme.main} 20%,
    ${({ theme }) => lighten(0.1, theme.main)} 70%
  );
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
