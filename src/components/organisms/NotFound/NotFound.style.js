import styled from 'styled-components';
import { lighten } from 'polished';

import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  background-image: linear-gradient(
    40deg,
    ${({ theme }) => theme.primary} 20%,
    ${({ theme }) => lighten(0.1, theme.primary)} 70%
  );
`;

export const Flex = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const Heading = styled.h2`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.priamry};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.headers.xl};
  color: ${({ theme }) => theme.white};
  margin-bottom: 3rem;
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.white};
`;
