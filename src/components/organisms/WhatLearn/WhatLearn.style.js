import styled from 'styled-components';

import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.section`
  margin: 4rem 0;
`;

export const Heading = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.headers.s};
`;

export const Grid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(38rem, 1fr));
  align-items: center;
  gap: 6rem;
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 0;
`;
