import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { ProjectHero } from 'components/organisms/ProjectHero/ProjectHero';
import { WhatLearn } from 'components/organisms/WhatLearn/WhatLearn';

const ProjectTemplate = ({
  data: {
    project: { title, aboutContent, typeApp, svgImage, learnContent },
  },
}) => (
  <>
    <ProjectHero title={title} type={typeApp} aboutContent={aboutContent} image={svgImage} />
    <WhatLearn learnContent={learnContent} />
  </>
);

export const query = graphql`
  query ProjectQuery($locale: String!, $id: String!) {
    project: datoCmsProject(locale: { eq: $locale }, originalId: { eq: $id }) {
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
    }
  }
`;

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      title: PropTypes.string,
      aboutContent: PropTypes.string,
      typeApp: PropTypes.string,
      svgImage: PropTypes.objectOf(PropTypes.string),
      learnContent: PropTypes.arrayOf(PropTypes.objectOf),
    }),
  }).isRequired,
};

export default ProjectTemplate;
