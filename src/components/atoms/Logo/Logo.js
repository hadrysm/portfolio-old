import React from 'react';
import PropTypes from 'prop-types';

import SvgLogo from 'components/SVG/SvgLogo';
import { CTA } from 'components/atoms/CTA/CTA';

import { Wrapper } from './Logo.styles';

const Logo = ({ size = '5rem' }) => (
  <CTA to="/" aria-label="logo">
    <Wrapper size={size}>
      <SvgLogo />
    </Wrapper>
  </CTA>
);

Logo.propTypes = {
  size: PropTypes.string,
};

export { Logo };
