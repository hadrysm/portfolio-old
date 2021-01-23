import styled, { css } from 'styled-components';

import { Text } from 'components/atoms/Text/Text';

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 2rem;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.grey100};

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.text};
    `}
`;
