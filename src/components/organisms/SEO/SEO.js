import React from 'react';
import PropTypes from 'prop-types';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const SEO = ({ seo, children, ...props }) => (
  // console.log(props);

  <HelmetDatoCms seo={seo} {...props}>
    {children}
  </HelmetDatoCms>
);

SEO.propTypes = {
  seo: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export { SEO };
