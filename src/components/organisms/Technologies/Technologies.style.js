import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.main};
  background-image: linear-gradient(
    40deg,
    ${({ theme }) => theme.main} 20%,
    ${({ theme }) => lighten(0.1, theme.main)} 70%
  );
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 3rem 0;

  ${({ theme }) => theme.mq.bigTablet} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  ${({ isColumn }) =>
    isColumn &&
    css`
      flex-direction: column;
      align-items: flex-start;

      ${({ theme }) => theme.mq.bigTablet} {
        flex-direction: column;
      }
    `}
`;
