import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { Text } from 'components/atoms/Text/Text';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper, Grid } from './WhatLearn.style';

const WhatLearn = ({ learnContent }) => {
  const { learn } = useTranslations();

  return (
    <Wrapper>
      <Content>
        <Text as="h3" isTitle isMedium color="primary">
          {learn.title}
        </Text>
        <Grid>
          {learnContent.map(({ id, paragraphContent }) => (
            <Text key={id}>{paragraphContent}</Text>
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
