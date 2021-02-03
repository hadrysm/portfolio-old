import React from 'react';
import PropTypes from 'prop-types';

import { CTA } from 'components/atoms/CTA/CTA';

import { Wrapper } from './SocialIcon.style';

const SocialIcon = ({ icon: Icon, href, name }) => (
  <Wrapper>
    <CTA isHyperLink href={href} aria-label={name}>
      <Icon />
    </CTA>
  </Wrapper>
);
SocialIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export { SocialIcon };
