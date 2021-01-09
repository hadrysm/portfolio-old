import React from 'react';

import Paragraph from 'components/atoms/Paragraph/Paragraph';

import { Wrapper } from './AboutMe.style';

const AboutMeText = () => (
  <Wrapper>
    <Paragraph>
      Hi, my name is Mateusz Hadryś and I am Frontend Developer living in Opole.
    </Paragraph>
    <Paragraph>
      I started to learn programming a year and a half ago and got so involved that since then I
      spend every day learning. It definitely became my passion. I love it ❤.
    </Paragraph>
    <Paragraph>
      I really enjoy creating websites and web applications using React 🚀️ , which is my favorite
      technology so far.
    </Paragraph>
    <Paragraph>I am currently learning about Nextjs and improving myself in testing.</Paragraph>
  </Wrapper>
);

export default AboutMeText;
