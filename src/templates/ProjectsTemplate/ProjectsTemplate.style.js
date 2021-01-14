import styled from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 5rem auto 0;
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
    height: 75%;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.white};
`;
