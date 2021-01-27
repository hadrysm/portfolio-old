import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { SEO } from 'components/organisms/SEO/SEO';
import { ProjectsGrid } from 'components/organisms/ProjectsGrid/ProjectsGrid';
import { Hero } from 'components/organisms/Hero/Hero';

import { useTranslations } from 'hooks/useTranslations';

const ProjectsTemplate = ({
  data: {
    projectPageContent: { heroParagraph, seo },
    allProjects: { nodes },
  },
}) => {
  const { projects } = useTranslations();
  return (
    <>
      <SEO seo={seo} />
      <Hero heroTitle={projects.title} heroSubtitle={heroParagraph} secondary />
      <ProjectsGrid projects={nodes} />
    </>
  );
};

export const query = graphql`
  query ProjectsQuery($locale: String!) {
    projectPageContent: datoCmsProjectsPage(locale: { eq: $locale }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
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
      seo: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
      heroParagraph: PropTypes.string,
    }),
    allProjects: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  }).isRequired,
};

export default ProjectsTemplate;
