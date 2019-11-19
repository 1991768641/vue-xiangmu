const path = require('path');

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target:'http://api.egu365.com',
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
        .set('components', path.resolve(__dirname, './src/components'))
        .set('assets', path.resolve(__dirname, './src/assets'))
        .set('pages', path.resolve(__dirname, './src/pages'))
        .set('utils', path.resolve(__dirname, './src/utils'))

    }
}