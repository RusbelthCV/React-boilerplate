const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 4000
    } ,
    resolve: { 
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: './src/index.html'
        })
    ]
}