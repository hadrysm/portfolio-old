import React from 'react';

import SvgHeadline from 'components/SVG/SvgHeadline';
import ScrollDown from 'components/atoms/ScrollDown/ScrollDown';

import { Container, Wrapper, InnerWrapper, Mask, Title, SubTitle } from './Hero.style';

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

const heroVariants = {
  hidden: {
    x: '50%',
  },
  visible: {
    x: '0',
  },
};

const Hero = () => (
  <Container>
    <Wrapper>
      <InnerWrapper
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={transition}
      >
        <Title>
          <SvgHeadline />
        </Title>
        <SubTitle>I create websites and web applications.🚀</SubTitle>
      </InnerWrapper>
      <ScrollDown />
      <Mask variants={heroVariants} initial="hidden" animate="visible" transition={transition} />
    </Wrapper>
  </Container>
);

export default Hero;
