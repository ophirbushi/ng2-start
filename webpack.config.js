var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        app: './src/main.ts',
        vendor: './src/vendor.ts'
    },

    output: {
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]

};
