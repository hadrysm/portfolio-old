import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { CTA } from 'components/atoms/CTA/CTA';
import { Headline } from 'components/atoms/Headline/Headline';
import { TechnologyList } from 'components/molecules/TechnologyList/TechnologyList';
import SvgChart from 'components/SVG/SvgChart';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper, Flex, Box } from './Technologies.style';

const Technologies = ({ technologies }) => {
  const { buttons, technologies: tech } = useTranslations();

  return (
    <Wrapper>
      <Content>
        <Flex isColumn>
          <Headline text={tech.title} />
          <Flex>
            <TechnologyList technologies={technologies} />
            <SvgChart />
          </Flex>
          <Box>
            <CTA isButton secondary>
              {buttons.check}
            </CTA>
          </Box>
        </Flex>
      </Content>
    </Wrapper>
  );
};

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Technologies };
