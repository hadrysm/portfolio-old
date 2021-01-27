import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { SEO } from 'components/organisms/SEO/SEO';
import { Hero } from 'components/organisms/Hero/Hero';
import { About } from 'components/organisms/About/About';
import { Technologies } from 'components/organisms/Technologies/Technologies';
import { Contact } from 'components/organisms/Contact/Contact';

const IndexPage = ({
  data: {
    homePageContent: {
      seo,
      locale,
      heroTitle,
      heroSubtitle,
      aboutImage: { fluid },
      aboutContent,
      contactSubtitle,
    },
    technologies: { nodes },
  },
}) => (
  <>
    <SEO seo={seo} lang={locale} />
    <Hero heroTitle={heroTitle} heroSubtitle={heroSubtitle} />
    <About aboutImage={fluid} aboutContent={aboutContent} />
    <Technologies technologies={nodes} />
    <Contact contactSubtitle={contactSubtitle} />
  </>
);

export const query = graphql`
  query HomeQuery($locale: String!) {
    homePageContent: datoCmsHomePage(locale: { eq: $locale }) {
      locale
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroTitle
      heroSubtitle
      aboutImage {
        fluid(maxWidth: 1000) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      aboutContent {
        ... on DatoCmsParagraph {
          id: originalId
          paragraphContent
        }
      }
      contactSubtitle
    }
    technologies: allDatoCmsTechnology(filter: { locale: { eq: $locale } }) {
      nodes {
        id: originalId
        name
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    homePageContent: PropTypes.shape({
      seo: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
      locale: PropTypes.string,
      heroTitle: PropTypes.string,
      heroSubtitle: PropTypes.string,
      aboutImage: PropTypes.shape({
        fluid: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
      }),
      aboutContent: PropTypes.arrayOf(PropTypes.object),
      contactSubtitle: PropTypes.string,
    }),
    technologies: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  }).isRequired,
};
export default IndexPage;
