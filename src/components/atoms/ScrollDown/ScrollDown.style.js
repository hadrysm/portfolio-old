import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.body.xs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Text = styled.span`
  color: inherit;
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-weight: inherit;
  font-size: inherit;
  letter-spacing: 1px;
  transform: translateY(-2px);
`;
