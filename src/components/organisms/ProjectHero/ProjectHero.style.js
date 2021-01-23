import styled from 'styled-components';
import { lighten } from 'polished';

import { Text } from 'components/atoms/Text/Text';
import { Content } from 'components/atoms/Content/Content';

export const Wrapper = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    background-image: linear-gradient(
      40deg,
      ${({ theme }) => theme.primary} 20%,
      ${({ theme }) => lighten(0.1, theme.primary)} 70%
    );
  }
`;

export const InnerWrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

export const StyledContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledText = styled(Text)`
  margin-bottom: 2rem;
`;
