import React from 'react';

import SvgLogo from 'components/SVG/SvgLogo';
import CTA from 'components/atoms/CTA/CTA';

import { Wrapper } from './Logo.styles';

const Logo = () => (
  <CTA to="/" pageTheme={{ primary: '#FCBF49' }}>
    <Wrapper>
      <SvgLogo />
    </Wrapper>
  </CTA>
);

export default Logo;
