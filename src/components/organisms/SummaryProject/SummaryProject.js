import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { Button } from 'components/atoms/Button/Button';

import { useTranslations } from 'hooks/useTranslations';
import { Flex, StyledCTA } from './SummaryProject.style';

const SummaryProject = ({ codeLink = '', liveLink = '' }) => {
  const { buttons } = useTranslations();

  return (
    <Content as="section">
      <Flex>
        <StyledCTA isHyperLink href={liveLink}>
          <Button as="span">{buttons.live}</Button>
        </StyledCTA>
        <StyledCTA isHyperLink href={codeLink}>
          <Button as="span">{buttons.code}</Button>
        </StyledCTA>
      </Flex>
    </Content>
  );
};

SummaryProject.propTypes = {
  codeLink: PropTypes.string,
  liveLink: PropTypes.string,
};

export { SummaryProject };
