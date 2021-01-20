import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';

import { Headline } from 'components/atoms/Headline/Headline';
import { TechnologyList } from 'components/molecules/TechnologyList/TechnologyList';

import SvgChart from 'components/SVG/SvgChart';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper, Flex } from './Technologies.style';

const Technologies = ({ technologies }) => {
  const { technologies: tech } = useTranslations();

  return (
    <Wrapper>
      <Content>
        <Flex isColumn>
          <Headline text={tech.title} />

          <Flex>
            <TechnologyList technologies={technologies} />
            <SvgChart />
          </Flex>
        </Flex>
      </Content>
    </Wrapper>
  );
};

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Technologies };
