module.exports = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./utils/sitemap-generator')
      }
      return config
    }
}