import styled from 'styled-components';

import { CTA } from 'components/atoms/CTA/CTA';

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledCTA = styled(CTA)`
  margin: 2rem 0;

  ${({ theme }) => theme.mq.tablet} {
    margin-left: 5rem;
  }
`;
