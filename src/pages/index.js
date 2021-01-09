import React from 'react';

import SEO from 'components/seo';

import Hero from 'components/organisms/Hero/Hero';
import About from 'components/organisms/About/About';
import Technologies from 'components/organisms/Technologies/Technologies';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <About />
    <Technologies />
  </>
);

export default IndexPage;
