import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Headline } from 'components/atoms/Headline/Headline';
import { ScrollDown } from 'components/atoms/ScrollDown/ScrollDown';
import SvgProjects from 'components/SVG/SvgProjects';
import { ProjectsGrid } from 'components/organisms/ProjectsGrid/ProjectsGrid';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper, InnerWrapper, StyledParagraph, StyledContent } from './ProjectsTemplate.style';

const ProjectsTemplate = ({
  data: {
    projectPageContent: { heroParagraph },
    allProjects: { nodes },
  },
}) => {
  const { projects } = useTranslations();

  return (
    <>
      <Wrapper>
        <StyledContent>
          <InnerWrapper>
            <Headline text={projects.title} isBig as="h2" />
            <StyledParagraph>{heroParagraph}</StyledParagraph>
          </InnerWrapper>
          <InnerWrapper>
            <SvgProjects />
          </InnerWrapper>
        </StyledContent>
        <ScrollDown top={85} left={10} />
      </Wrapper>
      <ProjectsGrid projects={nodes} />
    </>
  );
};

export const query = graphql`
  query ProjectsQuery($locale: String!) {
    projectPageContent: datoCmsProjectsPage(locale: { eq: $locale }) {
      heroParagraph
    }

    allProjects: allDatoCmsProject(filter: { locale: { eq: $locale } }) {
      nodes {
        id: originalId
        title
        typeApp
        slug
        pageTheme {
          hex
        }
        cardImage {
          fluid(maxWidth: 1000) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

ProjectsTemplate.propTypes = {
  data: PropTypes.shape({
    projectPageContent: PropTypes.shape({
      heroParagraph: PropTypes.string,
    }),
    allProjects: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  }).isRequired,
};

export default ProjectsTemplate;
