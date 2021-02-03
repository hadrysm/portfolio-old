import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'components/atoms/Image/Image';
import { CTA } from 'components/atoms/CTA/CTA';
import { Text } from 'components/atoms/Text/Text';
import { projectCardVariants } from 'animations';

import { Wrapper, InnerWrapper, ImageWrapper, Mask } from './ProjectCard.style';

const { mask, text, image } = projectCardVariants;

const ProjectCard = ({ title, typeApp, fluid, slug, pageTheme }) => (
  <Wrapper initial="hidden" whileHover="hover">
    <CTA to={`/${slug}`}>
      <ImageWrapper variants={image}>
        <Image fluid={fluid} />
      </ImageWrapper>
      <InnerWrapper variants={text}>
        <Text isItalic isSmall color="white">
          {typeApp}
        </Text>
        <Text isTitle isSmall isBold color="white">
          {title}
        </Text>
      </InnerWrapper>
      <Mask pageTheme={pageTheme} variants={mask} />
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
