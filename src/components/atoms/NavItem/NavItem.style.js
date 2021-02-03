import styled from 'styled-components';
import { CTA } from 'components/atoms/CTA/CTA';

import { Text } from 'components/atoms/Text/Text';

const ACTIVE_CLASS_NAME = '.active';

export const CTALink = styled(CTA)``;

export const Wrapper = styled.li`
  position: relative;
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const StyledText = styled(Text)`
  position: relative;
  z-index: 1;
  padding: 0.5rem;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0.8rem;
    background-color: ${({ colorContext: { primary } }) => primary};
    opacity: 0.6;
    transform-origin: left;
    z-index: -1;
    will-change: transform;
    transform: scaleX(0);
    transition: transform 400ms cubic-bezier(0.5, 0, 0, 0.5) 0ms;
  }

  ${CTALink}${ACTIVE_CLASS_NAME} &::before {
    transform: scale(1);
  }

  :hover ::before {
    transform: scale(1);
  }
`;
