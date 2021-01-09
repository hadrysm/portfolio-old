import styled from 'styled-components';

const Content = styled.div`
  padding: 6rem 2rem;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};

  ${({ theme }) => theme.mq.tablet} {
    padding: 6rem 5rem;
  }
`;

export default Content;
