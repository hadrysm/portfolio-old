import styled, { css } from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

export const Link = styled(TransitionLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: inherit;
  color: inherit;
  cursor: pointer;

  ${({ isButton }) =>
    isButton &&
    css`
      position: relative;
      padding: 2rem 1.5rem;
      border: none;
      background-color: transparent;
      font-family: ${({ theme }) => theme.font.family.primary};
      font-size: ${({ theme }) => theme.font.size.body.m};
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      z-index: ${({ theme }) => theme.zIndex.level1};
      overflow: hidden;

      ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: calc(100% - 60px);
        background-color: ${({ theme }) => theme.primary};
        z-index: -1;
        will-change: transform;
        transition: transform 400ms cubic-bezier(0.5, 0, 0, 0.5) 0ms;
      }

      :hover ::before {
        transform: translateX(calc(-100% + 60px));
      }

      ${({ secondary }) =>
        secondary &&
        css`
          color: ${({ theme }) => theme.white};
        `}
    `}

  ${({ isHyperLink }) =>
    isHyperLink &&
    css`
      /* hyperlink css  */
    `}
`;
