import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 0.5rem;
  padding: 0 1rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.secondary};
  color: ${({ theme, active }) => (active ? theme.colors.text : theme.colors.grey)};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
