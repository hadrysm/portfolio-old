exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const { setWebpackConfig } = actions

  if (stage.startsWith('develop')) {
    setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    })
  }
}
