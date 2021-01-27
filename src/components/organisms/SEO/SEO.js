import React from 'react';
import PropTypes from 'prop-types';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
  }
`;

const SEO = ({ seo, children, ...props }) => {
  const {
    datoCmsSite: { faviconMetaTags },
  } = useStaticQuery(query);

  return (
    <HelmetDatoCms seo={seo} favicon={faviconMetaTags} {...props}>
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mateusz Hadryś" />
      <link rel="canonical" href="" />
      {children}
    </HelmetDatoCms>
  );
};

SEO.propTypes = {
  seo: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export { SEO };
