import React from 'react';
import PropTypes from 'prop-types';

import { Headline } from 'components/atoms/Headline/Headline';
import { ScrollDown } from 'components/atoms/ScrollDown/ScrollDown';
import SvgProjects from 'components/SVG/SvgProjects';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper, InnerWrapper, StyledParagraph, StyledContent } from './HeroProjects.style';

const HeroProjects = ({ text = 'text' }) => {
  const { projects } = useTranslations();

  return (
    <Wrapper>
      <StyledContent>
        <InnerWrapper>
          <Headline text={projects.title} isBig as="h2" />
          <StyledParagraph>{text}</StyledParagraph>
        </InnerWrapper>
        <InnerWrapper>
          <SvgProjects />
        </InnerWrapper>
      </StyledContent>
      <ScrollDown top={85} left={10} />
    </Wrapper>
  );
};

HeroProjects.propTypes = {
  text: PropTypes.string,
};

export { HeroProjects };
