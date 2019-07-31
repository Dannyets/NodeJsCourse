const webpack = require('webpack');

module.exports = (config, options) => {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                WEB_API_BASE_URL: JSON.stringify(process.env.WEB_API_BASE_URL)
            }
        })
    );
  
    return config;
  };