import React from 'react';
import PropTypes from 'prop-types';

// import {ScrollDown} from 'components/atoms/ScrollDown/ScrollDown';

import { Wrapper, InnerWrapper, Mask, Title, SubTitle } from './Hero.style';

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

const heroVariants = {
  hidden: {
    x: '50%',
  },
  visible: {
    x: '0',
  },
};

const Hero = ({ heroTitle, heroSubtitle }) => (
  <Wrapper>
    <InnerWrapper
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      transition={transition}
    >
      <Title>{heroTitle}</Title>
      <SubTitle>{heroSubtitle}</SubTitle>
    </InnerWrapper>
    {/* <ScrollDown /> */}
    <Mask variants={heroVariants} initial="hidden" animate="visible" transition={transition} />
  </Wrapper>
);

Hero.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  heroSubtitle: PropTypes.string.isRequired,
};

export { Hero };
