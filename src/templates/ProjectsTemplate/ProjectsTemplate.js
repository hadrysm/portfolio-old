import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Headline } from 'components/atoms/Headline/Headline';
import { ScrollDown } from 'components/atoms/ScrollDown/ScrollDown';
import SvgProjects from 'components/SVG/SvgProjects';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper, InnerWrapper, StyledParagraph, StyledContent } from './ProjectsTemplate.style';

const ProjectsTemplate = ({
  data: {
    projectPageContent: { heroParagraph },
  },
}) => {
  const { projects } = useTranslations();
  return (
    <Wrapper>
      <StyledContent>
        <InnerWrapper>
          <Headline text={projects.title} isBig />
          <StyledParagraph>{heroParagraph}</StyledParagraph>
        </InnerWrapper>
        <InnerWrapper>
          <SvgProjects />
        </InnerWrapper>
      </StyledContent>
      <ScrollDown top={85} left={10} />
    </Wrapper>
  );
};

export const query = graphql`
  query ProjectsQuery($locale: String!) {
    projectPageContent: datoCmsProjectsPage(locale: { eq: $locale }) {
      heroParagraph
    }
  }
`;

ProjectsTemplate.propTypes = {
  data: PropTypes.shape({
    projectPageContent: PropTypes.shape({
      heroParagraph: PropTypes.string,
    }),
  }).isRequired,
};

export default ProjectsTemplate;
