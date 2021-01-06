import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  color: ${({ theme }) => theme.main};
`;
