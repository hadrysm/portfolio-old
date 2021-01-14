import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Headline from 'components/atoms/Headline/Headline';
import Content from 'components/atoms/Content/Content';
import ScrollDown from 'components/atoms/ScrollDown/ScrollDown';

import { Wrapper, InnerWrapper, StyledParagraph } from './ProjectsTemplate.style';

const ProjectsTemplate = ({
  data: {
    projectPageContent: { paragraph },
  },
}) => {
  console.log(paragraph);
  return (
    <Wrapper>
      <InnerWrapper>
        <Content>
          <Headline text="projekty" isBig />
          <StyledParagraph>{paragraph}</StyledParagraph>
        </Content>
      </InnerWrapper>
      <InnerWrapper>
        <Content>
          <Headline text="projekty" isBig />
          <StyledParagraph>{paragraph}</StyledParagraph>
        </Content>
      </InnerWrapper>
      <ScrollDown top={85} left={10} />
    </Wrapper>
  );
};

export const query = graphql`
  query ProjectsQuery($locale: String!) {
    projectPageContent: datoCmsProjectsPage(locale: { eq: $locale }) {
      paragraph
    }
  }
`;

ProjectsTemplate.propTypes = {
  data: PropTypes.shape({
    projectPageContent: PropTypes.shape({
      paragraph: PropTypes.string,
    }),
  }).isRequired,
};

export default ProjectsTemplate;
