import styled, { css } from 'styled-components';

export const Widget = styled.aside`
  min-width: 30rem;
  max-width: 50rem;
  padding: 2rem 4rem;
  margin: 0 auto 3rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.green};
  text-align: center;

  ${({ status }) =>
    status >= 400 &&
    css`
      background-color: ${({ theme }) => theme.red};
    `}
`;
