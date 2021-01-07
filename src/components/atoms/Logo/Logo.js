import React from 'react';

import SvgLogo from 'components/SVG/SvgLogo';
import CTA from 'components/atoms/CTA/CTA';

import { Wrapper } from './Logo.styles';

const Logo = () => (
  <CTA>
    <Wrapper>
      <SvgLogo />
    </Wrapper>
  </CTA>
);

export default Logo;
