import React from 'react';
import PropTypes from 'prop-types';

import CTA from 'components/atoms/CTA/CTA';

import { Wrapper } from './SocialIcon.style';

const SocialIcon = ({ icon: Icon, href = '/' }) => (
  <Wrapper>
    <CTA isHyperLink href={href}>
      <Icon />
    </CTA>
  </Wrapper>
);

SocialIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string,
};

export default SocialIcon;
