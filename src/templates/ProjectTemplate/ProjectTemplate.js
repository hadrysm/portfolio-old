import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Technologies } from 'components/organisms/Technologies/Technologies';
import { ProjectHero } from 'components/organisms/ProjectHero/ProjectHero';
import { WhatLearn } from 'components/organisms/WhatLearn/WhatLearn';
import { SummaryProject } from 'components/organisms/SummaryProject/SummaryProject';

const ProjectTemplate = ({
  data: {
    project: { title, aboutContent, typeApp, svgImage, learnContent, technologies, gallery },
  },
}) => (
  <>
    <ProjectHero title={title} type={typeApp} aboutContent={aboutContent} image={svgImage} />
    <WhatLearn learnContent={learnContent} />
    <Technologies technologies={technologies} isProject gallery={gallery} />
    <SummaryProject />
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
      technologies: PropTypes.arrayOf(PropTypes.object),
      gallery: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ProjectTemplate;
