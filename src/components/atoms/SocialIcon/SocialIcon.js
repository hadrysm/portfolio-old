import React from 'react';
import PropTypes from 'prop-types';

import CTA from 'components/atoms/CTA/CTA';

import { Wrapper } from './SocialIcon.style';

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

const socialVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      ...transition,
      delay: 1.2,
    },
  },
  closed: {
    opacity: 0,
    x: -120,
    transition: {
      ...transition,
    },
  },
};

const SocialIcon = ({ icon: Icon, href = '/' }) => (
  <Wrapper variants={socialVariants}>
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
