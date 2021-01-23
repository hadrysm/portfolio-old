import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 8rem;
  width: 100%;

  ${({ isProject }) =>
    isProject &&
    css`
      max-width: 30rem;
      grid-template-columns: 1fr;
    `}
`;
