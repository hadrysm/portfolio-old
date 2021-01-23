import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';

import { Headline } from 'components/atoms/Headline/Headline';
import { TechnologyList } from 'components/molecules/TechnologyList/TechnologyList';
import { Slider } from 'components/molecules/Slider/Slider';

import SvgChart from 'components/SVG/SvgChart';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper, Flex } from './Technologies.style';

const Technologies = ({ technologies, isProject = false, gallery = {} }) => {
  const { technologies: tech } = useTranslations();

  return (
    <Wrapper>
      <Content>
        <Flex isColumn>
          <Headline text={tech.title} isMedium />
          <Flex isProject={isProject}>
            <TechnologyList technologies={technologies} isProject={isProject} />
            {isProject ? <Slider images={gallery} /> : <SvgChart />}
          </Flex>
        </Flex>
      </Content>
    </Wrapper>
  );
};

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isProject: PropTypes.bool,
  gallery: PropTypes.arrayOf(PropTypes.object, PropTypes.string),
};

export { Technologies };
