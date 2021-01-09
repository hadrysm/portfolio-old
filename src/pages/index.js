import React from 'react';

import SEO from 'components/seo';

import Hero from 'components/organisms/Hero/Hero';
import About from 'components/organisms/About/About';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <About />
  </>
);

export default IndexPage;
