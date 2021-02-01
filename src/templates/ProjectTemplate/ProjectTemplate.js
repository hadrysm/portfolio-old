import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { SEO } from 'components/organisms/SEO/SEO';
import { Technologies } from 'components/organisms/Technologies/Technologies';
import { ProjectHero } from 'components/organisms/ProjectHero/ProjectHero';
import { WhatLearn } from 'components/organisms/WhatLearn/WhatLearn';
import { SummaryProject } from 'components/organisms/SummaryProject/SummaryProject';

import { usePageThemeDispatch } from 'providers/PageThemeProvider/PageThemeProvider';

const ProjectTemplate = ({
  data: {
    project: {
      locale,
      pageTheme,
      seo,
      title,
      aboutContent,
      typeApp,
      svgImage,
      learnContent,
      technologies,
      gallery,
      codeLink,
      liveLink,
    },
  },
}) => {
  usePageThemeDispatch(pageTheme.hex);

  return (
    <>
      <SEO seo={seo} lang={locale} />
      <ProjectHero title={title} type={typeApp} aboutContent={aboutContent} image={svgImage} />
      <WhatLearn learnContent={learnContent} />
      <Technologies technologies={technologies} isProject gallery={gallery} />
      <SummaryProject codeLink={codeLink} liveLink={liveLink} />
    </>
  );
};

export const query = graphql`
  query ProjectQuery($locale: String!, $id: String!) {
    project: datoCmsProject(locale: { eq: $locale }, originalId: { eq: $id }) {
      locale
      pageTheme {
        hex
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      typeApp
      aboutContent
      learnContent {
        ... on DatoCmsParagraph {
          id: originalId
          paragraphContent
        }
      }
      technologies {
        id: originalId
        name
      }
      gallery {
        alt
        fluid(maxWidth: 1000) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      svgImage {
        url
        alt
      }
      codeLink
      liveLink
    }
  }
`;

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      seo: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
      pageTheme: PropTypes.objectOf(PropTypes.string),
      locale: PropTypes.string,
      title: PropTypes.string,
      aboutContent: PropTypes.string,
      typeApp: PropTypes.string,
      svgImage: PropTypes.objectOf(PropTypes.string),
      learnContent: PropTypes.arrayOf(PropTypes.objectOf),
      technologies: PropTypes.arrayOf(PropTypes.object),
      gallery: PropTypes.arrayOf(PropTypes.object),
      codeLink: PropTypes.string,
      liveLink: PropTypes.string,
    }),
  }).isRequired,
};

export default ProjectTemplate;
