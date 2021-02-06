import styled from 'styled-components';

const Content = styled.div`
  position: relative;
  padding: 4rem 2rem;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  z-index: ${({ theme }) => theme.zIndex.level3};

  ${({ theme }) => theme.mq.tablet} {
    padding: 4rem 5rem;
  }
`;

export { Content };
