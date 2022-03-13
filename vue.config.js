// vue.config.js

/**
 * Vue client configs.
 * 
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    devServer: {
        proxy: 'http://localhost:8080/' // Setting the proxy to connect to our backend
    }
}