import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { Text } from 'components/atoms/Text/Text';
import { Animated } from 'animations';

import { useTranslations } from 'hooks/useTranslations';
import { useObserverAnimation } from 'hooks/useObserverAnimation';

import { Wrapper, Grid } from './WhatLearn.style';

const WhatLearn = ({ learnContent }) => {
  const { aboutProject } = useTranslations();
  const [containerRef, controls] = useObserverAnimation();

  return (
    <Wrapper ref={containerRef}>
      <Content>
        <Text as="h3" isTitle isMedium color="primary">
          {aboutProject.title}
        </Text>
        <Grid>
          {learnContent.map(({ id, paragraphContent }, index) => (
            <Animated.FromDirection
              key={id}
              from="bottom"
              animate={controls}
              duration={1.3}
              delay={0.2}
              custom={index}
            >
              <Text>{paragraphContent}</Text>
            </Animated.FromDirection>
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
