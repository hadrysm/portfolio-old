import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 4rem 0;
`;

export const Grid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  align-items: center;
  gap: 6rem;
`;
