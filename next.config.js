import withSass from '@zeit/next-sass';

module.exports = withSass({
  webpack(config, { isServer }) {
    config.resolve.alias['theme'] = path.join(__dirname, 'theme');
    config.resolve.alias['store'] = path.join(__dirname, 'store');
    config.resolve.alias['config'] = path.join(__dirname, 'config');
    config.resolve.alias['utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['layouts'] = path.join(__dirname, 'layouts');
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.stats = {
      warningsFilter: (warning) => /Conflicting order between/m.test(warning),
    };
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    // if (!isServer) {
    //   config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
    // }

    return config;
  },
});
