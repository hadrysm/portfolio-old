import React from 'react';

import { Content } from 'components/atoms/Content/Content';
import { Button } from 'components/atoms/Button/Button';

import { Flex, StyledCTA } from './SummaryProject.style';

const SummaryProject = () => (
  <Content as="section">
    <Flex>
      <StyledCTA isHyperLink href="">
        <Button as="span">live</Button>
      </StyledCTA>
      <StyledCTA isHyperLink href="">
        <Button as="span">Code</Button>
      </StyledCTA>
    </Flex>
  </Content>
);

export { SummaryProject };
