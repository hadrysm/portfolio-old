const path = require('path');

const { buildLocalePath } = require('./src/helpers/gatsby-node-helpers');
const locales = require('./src/config/locales');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const { setWebpackConfig } = actions;

  if (stage.startsWith('develop')) {
    setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    });
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  locales.forEach(({ siteLanguage: locale }) =>
    createPage({
      ...page,
      path: buildLocalePath({ locale, path: page.path }),
      context: {
        ...page.context,
        locale,
      },
    }),
  );
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const ProjectsTemplate = path.resolve(`src/templates/ProjectsTemplate/ProjectsTemplate.js`);
  const ProjectTemplate = path.resolve(`src/templates/ProjectTemplate/ProjectTemplate.js`);
  const BlogTemplate = path.resolve(`src/templates/BlogTemplate/BlogTemplate.js`);

  const {
    data: { projectsPages, projectPage, blogPages },
  } = await graphql(`
    {
      projectsPages: allDatoCmsProjectsPage {
        nodes {
          slug
          locale
        }
      }

      blogPages: allDatoCmsBlogPage {
        nodes {
          locale
          slug
        }
      }

      projectPage: allDatoCmsProject {
        nodes {
          id: originalId
          slug
          locale
        }
      }
    }
  `);

  if (projectsPages) {
    projectsPages.nodes.forEach(({ slug, locale }) => {
      createPage({
        path: buildLocalePath({ locale, path: `/${slug}` }),
        component: ProjectsTemplate,
        context: {
          locale,
        },
      });
    });
  }

  if (blogPages) {
    blogPages.nodes.forEach(({ slug, locale }) => {
      createPage({
        path: buildLocalePath({ locale, path: `/${slug}` }),
        component: BlogTemplate,
        context: {
          locale,
        },
      });
    });
  }

  if (projectPage) {
    projectPage.nodes.forEach(({ slug, locale, id }) => {
      createPage({
        path: buildLocalePath({ locale, path: `/${slug}` }),
        component: ProjectTemplate,
        context: {
          locale,
          id,
        },
      });
    });
  }
};
