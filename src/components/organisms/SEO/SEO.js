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

const SEO = ({ seo, lang = 'pl', children, ...props }) => {
  const {
    datoCmsSite: { faviconMetaTags },
  } = useStaticQuery(query);

  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <HelmetDatoCms
      seo={seo}
      favicon={faviconMetaTags}
      htmlAttributes={{
        lang,
      }}
      {...props}
    >
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mateusz Hadryś" />
      <link rel="canonical" href={url} />
      {children}
    </HelmetDatoCms>
  );
};

SEO.propTypes = {
  seo: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  lang: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export { SEO };
