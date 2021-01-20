import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.main};
  background-image: linear-gradient(
    40deg,
    ${({ theme }) => theme.main} 20%,
    ${({ theme }) => darken(0.1, theme.main)} 70%
  );
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 3rem 0;

  ${({ isColumn }) =>
    isColumn &&
    css`
      flex-direction: column;
    `}

  ${({ isProject }) =>
    isProject &&
    css`
      flex-direction: column;
      align-items: flex-start;

      ${({ theme }) => theme.mq.tablet} {
        flex-direction: row;
        align-items: center;
      }
    `}
`;
