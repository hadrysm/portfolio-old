import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  background-image: linear-gradient(
    40deg,
    ${({ theme }) => theme.primary} 20%,
    ${({ theme }) => lighten(0.1, theme.primary)} 70%
  );
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const InnerWrapper = styled.div`
  max-width: 50rem;
  margin: 4.5rem auto 0;
`;

export const Img = styled.img`
  display: block;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;
