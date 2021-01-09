import React from 'react';

import SEO from 'components/seo';

import Hero from 'components/organisms/Hero/Hero';
import About from 'components/organisms/About/About';
import Technologies from 'components/organisms/Technologies/Technologies';
import Contact from 'components/organisms/Contact/Contact';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <About />
    <Technologies />
    <Contact />
  </>
);

export default IndexPage;
