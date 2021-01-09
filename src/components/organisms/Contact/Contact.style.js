import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size.body.s};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
