import styled from 'styled-components';

import { Text } from 'components/atoms/Text/Text';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 5rem;
  padding-left: 1rem;

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledText = styled(Text)`
  position: relative;
  padding-right: 3rem;
  transform: translateX(3rem);

  ::before {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: calc(50% - 1.5rem / 2);
    left: -3rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
  }
`;
