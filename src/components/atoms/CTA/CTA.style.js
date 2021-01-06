import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
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
