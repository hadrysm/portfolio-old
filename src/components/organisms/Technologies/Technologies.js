import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { Headline } from 'components/atoms/Headline/Headline';
import { TechnologyList } from 'components/molecules/TechnologyList/TechnologyList';
import { Slider } from 'components/molecules/Slider/Slider';
import { Animated } from 'animations';

import SvgChart from 'components/SVG/SvgChart';

import { useTranslations } from 'hooks/useTranslations';
import { useObserverAnimation } from 'hooks/useObserverAnimation';

import { Wrapper, Flex } from './Technologies.style';

const Technologies = ({ technologies, isProject = false, gallery = {} }) => {
  const { technologies: tech } = useTranslations();
  const [containerRef, controls] = useObserverAnimation({ threshold: 0.2 });

  return (
    <section ref={containerRef}>
      <Animated.FromDirection from="right" animate={controls} duration={1}>
        <Wrapper>
          <Content>
            <Flex isColumn>
              <Animated.FromDirection from="top" delay={0.5} animate={controls} duration={1.1}>
                <Headline text={tech.title} isMedium />
              </Animated.FromDirection>
              <Flex isProject={isProject}>
                <TechnologyList technologies={technologies} isProject={isProject} />
                {isProject ? <Slider images={gallery} /> : <SvgChart />}
              </Flex>
            </Flex>
          </Content>
        </Wrapper>
      </Animated.FromDirection>
    </section>
  );
};

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isProject: PropTypes.bool,
  gallery: PropTypes.arrayOf(PropTypes.object, PropTypes.string),
};

export { Technologies };
