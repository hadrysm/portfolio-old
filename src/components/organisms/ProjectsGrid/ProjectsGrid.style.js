import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  margin: 5rem auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  align-items: center;
  gap: 2rem;
`;
