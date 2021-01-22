import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { Button } from 'components/atoms/Button/Button';

import { Flex, StyledCTA } from './SummaryProject.style';

const SummaryProject = ({ codeLink = '', liveLink = '' }) => (
  <Content as="section">
    <Flex>
      <StyledCTA isHyperLink href={liveLink}>
        <Button as="span">live</Button>
      </StyledCTA>
      <StyledCTA isHyperLink href={codeLink}>
        <Button as="span">Code</Button>
      </StyledCTA>
    </Flex>
  </Content>
);

SummaryProject.propTypes = {
  codeLink: PropTypes.string,
  liveLink: PropTypes.string,
};

export { SummaryProject };
