import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { ProjectsGrid } from 'components/organisms/ProjectsGrid/ProjectsGrid';

import { HeroProjects } from 'components/organisms/HeroProjects/HeroProjects';

const ProjectsTemplate = ({
  data: {
    projectPageContent: { heroParagraph },
    allProjects: { nodes },
  },
}) => (
  <>
    <HeroProjects text={heroParagraph} />
    <ProjectsGrid projects={nodes} />
  </>
);

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
