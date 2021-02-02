import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { CTA } from 'components/atoms/CTA/CTA';
import { Button } from 'components/atoms/Button/Button';
import { Animated } from 'animations';

import { ProjectCard } from 'components/molecules/ProjectCard/ProjectCard';

import { useTranslations } from 'hooks/useTranslations';
import { useObserverAnimation } from 'hooks/useObserverAnimation';

import { Grid, InnerWrapper } from './ProjectsGrid.style';

const ProjectsGrid = ({ projects }) => {
  const { buttons } = useTranslations();
  const [containerRef, controls] = useObserverAnimation();

  return (
    <Content>
      <Grid ref={containerRef}>
        {projects.map(({ id, title, typeApp, cardImage, slug, pageTheme }, index) => (
          <Animated.FromDirection
            key={id}
            from="bottom"
            delay={0.2}
            duration={1.3}
            custom={index}
            animate={controls}
          >
            <ProjectCard
              title={title}
              typeApp={typeApp}
              fluid={cardImage.fluid}
              slug={slug}
              pageTheme={pageTheme.hex}
            />
          </Animated.FromDirection>
        ))}
      </Grid>
      <InnerWrapper>
        <CTA isHyperLink href="https://github.com/hadrysm">
          <Button as="span">{buttons.more}</Button>
        </CTA>
      </InnerWrapper>
    </Content>
  );
};

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { ProjectsGrid };
