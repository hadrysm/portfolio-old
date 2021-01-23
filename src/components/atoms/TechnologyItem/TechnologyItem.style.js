import styled from 'styled-components';

import { Text } from 'components/atoms/Text/Text';

export const Item = styled.li`
  margin-bottom: 1rem;
  height: 5rem;

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledText = styled(Text)`
  position: relative;
  margin-left: 1.5rem;
  padding-left: 1rem;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -1.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.primary};
  }
`;
