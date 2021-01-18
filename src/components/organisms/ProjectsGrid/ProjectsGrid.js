import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { ProjectCard } from 'components/molecules/ProjectCard/ProjectCard';

import { Grid } from './ProjectsGrid.style';

const ProjectsGrid = ({ projects }) => (
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
  </Content>
);

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { ProjectsGrid };
