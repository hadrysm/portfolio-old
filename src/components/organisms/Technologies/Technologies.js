import React from 'react';

import Content from 'components/atoms/Content/Content';
import CTA from 'components/atoms/CTA/CTA';
import Headline from 'components/atoms/Headline/Headline';
import TechnologyList from 'components/molecules/TechnologyList/TechnologyList';
import SvgChart from 'components/SVG/SvgChart';

import { Wrapper, Flex, Box } from './Technologies.style';

const Technologies = () => (
  <Wrapper>
    <Content>
      <Flex isColumn>
        <Headline text="Technologies" />
        <Flex>
          <TechnologyList />
          <SvgChart />
        </Flex>
        <Box>
          <CTA isButton secondary>
            Check projects
          </CTA>
        </Box>
      </Flex>
    </Content>
  </Wrapper>
);

export default Technologies;
