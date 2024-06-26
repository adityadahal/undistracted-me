module.exports = {
    outputDir: 'dist',
    css: {
        extract: false,
    },
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        output: {
            filename: 'background.bundle.js'
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    }
}