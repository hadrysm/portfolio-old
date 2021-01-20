import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper, Heading, Grid, StyledParagraph } from './WhatLearn.style';

const WhatLearn = ({ learnContent }) => {
  const { learn } = useTranslations();

  return (
    <Wrapper>
      <Content>
        <Heading>{learn.title}</Heading>
        <Grid>
          {learnContent.map(({ id, paragraphContent }) => (
            <StyledParagraph key={id}>{paragraphContent}</StyledParagraph>
          ))}
        </Grid>
      </Content>
    </Wrapper>
  );
};

WhatLearn.propTypes = {
  learnContent: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export { WhatLearn };
