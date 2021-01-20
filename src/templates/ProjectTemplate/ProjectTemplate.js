import React from 'react';
import { graphql } from 'gatsby';

const ProjectTemplate = props => {
  console.log(props);

  return <div>project</div>;
};

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

export default ProjectTemplate;
