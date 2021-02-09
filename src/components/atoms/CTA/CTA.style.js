import styled, { css } from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

export const Link = styled(TransitionLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  background-color: transparent;
  border: none;

  :focus-visible {
    border: 1px solid black;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      will-change: opacity;
      transition: opacity 400ms ease-in 0ms;
      cursor: not-allowed;
    `}
`;
