const path = require('path');
require('dotenv').config();

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-transition-link',
    {
      resolve: '@danbruegge/gatsby-plugin-stylelint',
      options: { files: ['**/*.{js,jsx}'] },
    },
    // {
    //   resolve: `gatsby-plugin-env-variables`,
    //   options: {
    //     allowList: ['DATO_CMS_API_KEY', 'EMAILJS_ID_SERVICE'],
    //   },
    // },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_API_KEY,
        localeFallbacks: {
          it: ['pl', 'en'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        templates: path.join(__dirname, 'src/templates'),
        pages: path.join(__dirname, 'src/pages'),
        assets: path.join(__dirname, 'src/assets'),
        helpers: path.join(__dirname, 'src/helpers'),
        providers: path.join(__dirname, 'src/providers'),
        animations: path.join(__dirname, 'src/components/animations'),
        hooks: path.join(__dirname, 'src/hooks'),
        config: path.join(__dirname, 'src/config'),
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Poppins',
              variants: ['300', '400', '600', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Raleway',
              variants: ['300', '400', '500'],
              subsets: ['latin-ext'],
            },
          ],
        },
      },
    },
  ],
};
