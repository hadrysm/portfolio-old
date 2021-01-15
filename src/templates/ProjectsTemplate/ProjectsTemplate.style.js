import styled from 'styled-components';

import { Content } from 'components/atoms/Content/Content';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.section`
  margin: 5rem 0 auto;
  min-height: calc(100vh - 5rem);
  position: relative;
  display: flex;
  align-items: center;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const InnerWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.white};
  max-width: 40rem;
`;

export const StyledContent = styled(Content)`
  display: flex;
  align-items: center;
`;
