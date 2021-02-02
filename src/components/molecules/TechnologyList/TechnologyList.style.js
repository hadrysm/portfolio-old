import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ isProject }) =>
    isProject &&
    css`
      max-width: 30rem;
      grid-template-columns: 1fr;
    `}
`;
