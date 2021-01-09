import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.secondary};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${({ isColumn }) =>
    isColumn &&
    css`
      flex-direction: column;
    `}
`;

export const Box = styled.div`
  margin-top: 2rem;
`;
