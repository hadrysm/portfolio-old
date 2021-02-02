import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { Headline } from 'components/atoms/Headline/Headline';
import { Image } from 'components/atoms/Image/Image';
import { AboutMeText } from 'components/molecules/AboutMeText/AboutMeText';
import { Animated } from 'animations';

import { useTranslations } from 'hooks/useTranslations';
import { useObserverAnimation } from 'hooks/useObserverAnimation';
import { Grid, InnerWrapper, ImgWrapper } from './About.style';

const About = ({ aboutImage, aboutContent }) => {
  const { about } = useTranslations();

  const [headlineRef, controls] = useObserverAnimation();
  const [imageRef, controls2] = useObserverAnimation();

  return (
    <Content as="section">
      <Grid>
        <InnerWrapper ref={headlineRef}>
          <Animated.FromDirection from="bottom" animate={controls} duration={1.1}>
            <Headline text={about.title} primary isMedium />
          </Animated.FromDirection>
          <AboutMeText content={aboutContent} />
        </InnerWrapper>
        <InnerWrapper ref={imageRef}>
          <ImgWrapper>
            <Animated.FromDirection from="bottom" animate={controls2} duration={1.1}>
              <Image fluid={aboutImage} />
            </Animated.FromDirection>
          </ImgWrapper>
        </InnerWrapper>
      </Grid>
    </Content>
  );
};

About.propTypes = {
  aboutImage: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))])
    .isRequired,
  aboutContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { About };
