import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.main};
`
