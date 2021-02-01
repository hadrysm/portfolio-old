import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'components/atoms/Image/Image';
import { CTA } from 'components/atoms/CTA/CTA';
import { Text } from 'components/atoms/Text/Text';

import { Wrapper, InnerWrapper, ImageWrapper, Mask } from './ProjectCard.style';

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

const maskVariants = {
  hidden: {
    y: '100%',
    skewY: 20,
    transition: {
      ...transition,
    },
  },

  hover: {
    y: 0,
    skewY: 0,
    transition: {
      ...transition,
    },
  },
};

const ProjectCard = ({ title, typeApp, fluid, slug, pageTheme }) => (
  <Wrapper initial="hidden" whileHover="hover">
    <CTA to={`/${slug}`}>
      <ImageWrapper>
        <Image fluid={fluid} />
      </ImageWrapper>
      <InnerWrapper>
        <Text isItalic isSmall color="white">
          {typeApp}
        </Text>
        <Text isTitle isSmall isBold color="white">
          {title}
        </Text>
      </InnerWrapper>
      <Mask pageTheme={pageTheme} variants={maskVariants} />
    </CTA>
  </Wrapper>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  typeApp: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  pageTheme: PropTypes.string.isRequired,
  fluid: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))])
    .isRequired,
};

export { ProjectCard };
