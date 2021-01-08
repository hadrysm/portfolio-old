import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Headline from 'components/atoms/Headline/Headline';
import Image from 'components/atoms/Image/Image';
import AboutMeText from 'components/molecules/AboutMeText/AboutMeText';

import { Wrapper, InnerWrapper } from './About.style';

const query = graphql`
  {
    file(name: { eq: "me" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 1600, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <Wrapper>
      <InnerWrapper>
        <Headline text="about me" />
        <AboutMeText />
      </InnerWrapper>
      <InnerWrapper>
        <Image fluid={fluid} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default About;
