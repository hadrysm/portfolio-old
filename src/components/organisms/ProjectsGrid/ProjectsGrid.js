import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { CTA } from 'components/atoms/CTA/CTA';
import { Button } from 'components/atoms/Button/Button';

import { ProjectCard } from 'components/molecules/ProjectCard/ProjectCard';

import { useTranslations } from 'hooks/useTranslations';

import { Grid, InnerWrapper } from './ProjectsGrid.style';

const ProjectsGrid = ({ projects }) => {
  const { buttons } = useTranslations();
  return (
    <Content>
      <Grid>
        {projects.map(({ id, title, typeApp, cardImage, slug, pageTheme }) => (
          <ProjectCard
            key={id}
            title={title}
            typeApp={typeApp}
            fluid={cardImage.fluid}
            slug={slug}
            pageTheme={pageTheme.hex}
          />
        ))}
      </Grid>
      <InnerWrapper>
        <CTA isHyperLink href="https://github.com/hadrysm">
          <Button>{buttons.more}</Button>
        </CTA>
      </InnerWrapper>
    </Content>
  );
};

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { ProjectsGrid };
