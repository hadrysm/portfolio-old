import styled from 'styled-components';

import { CTA } from 'components/atoms/CTA/CTA';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  margin: 0 auto;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`;

export const StyledCTA = styled(CTA)`
  margin: 3rem 0;
`;
