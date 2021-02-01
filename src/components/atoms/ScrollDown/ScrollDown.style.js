import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  z-index: ${({ theme }) => theme.zIndex.level5};
  transform: rotate(-90deg);
`;

export const Text = styled.span`
  display: inline-block;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  letter-spacing: 1px;
  transform: translateY(-2px);
`;

export const Flex = styled.div`
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.body.xs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
