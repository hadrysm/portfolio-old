import styled, { css } from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

export const Link = styled(TransitionLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: inherit;
  color: inherit;
  ${({ isButton }) =>
    isButton &&
    css`
      /* button css  */
    `}
  ${({ isHyperLink }) =>
    isHyperLink &&
    css`
      /* hyperlink css  */
    `}
`;
