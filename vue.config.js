const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new BrowserSyncPlugin(
                // BrowserSync options
                {
                    // browse to http://localhost:3000/ during development
                    host: 'localhost',
                    port: 3000,
                    // proxy the Webpack Dev Server endpoint
                    // (which should be serving on http://localhost:8080/)
                    // through BrowserSync
                    proxy: 'http://localhost:8080/'
                }, {
                    // put to false if you want to prevent BrowserSync from reloading the page
                    // and let Webpack Dev Server take care of this
                    reload: false
                }
            )
        ]
    }
}