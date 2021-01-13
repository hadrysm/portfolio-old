// const path = require('path');

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

  locales.forEach(locale =>
    createPage({
      ...page,
      path: buildLocalePath({ locale, path: page.path }),
      context: {
        ...page.context,
        locale: locale.siteLanguage,
      },
    }),
  );
};

// exports.createPages = async ({ graphql, actions: { createPage } }) => {

//   const ProductsTemplate = path.resolve(`src/templates/ProductsTemplate/ProductsTemplate.js`);

//   const {
//     data: { homePages },
//   } = await graphql(`
//     {
//       homePages: allDatoCmsHomePage {
//         nodes {
//           slug
//         }
//       }
//     }
//   `);

//   locales.forEach(locale => {
//     createPage({
//   path: buildLocalePath({ locale, path: '' }),
//       component: homeTemplate,
//       context: {
//         locale: locale.path,
//       },
//     });
//   });
// };
