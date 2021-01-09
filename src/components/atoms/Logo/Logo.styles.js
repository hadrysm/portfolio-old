import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ size }) => size || '5rem'};
  height: ${({ size }) => size || '5rem'};
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  color: ${({ theme }) => theme.main};
`;
