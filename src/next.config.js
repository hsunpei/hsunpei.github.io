const cfg = require('./config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(gif|png|jpe?g)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65,
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
            gifsicle: {
              interlaced: true,
              optimizationLevel: 2,
            },
            // the webp option will enable WEBP
            webp: {
              quality: 75,
            },
          },
        },
      ],
    })

    // add an asset prefix for exporting the assets
    if (isProd) {
      config.output.publicPath = `${cfg.appConfig.assetPrefix}${config.output.publicPath}`; // affects 'chunks'
    }

    return config
  },

  exportPathMap() {
    return {
      '/': { page: '/' },
    }
  },
}
