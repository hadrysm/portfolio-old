import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 2rem 0;
  color: ${({ theme }) => theme.secondary};
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.body.s};
  letter-spacing: 0.5px;
`;

export default Paragraph;
