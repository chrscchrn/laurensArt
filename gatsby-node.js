exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /@dschoon\/react-waves/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }