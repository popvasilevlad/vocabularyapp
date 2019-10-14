const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            'ui-components': path.resolve(__dirname, 'src/components/ui/'),
            'schema-components': path.resolve(__dirname, 'src/components/schema/'),
            'constants': path.resolve(__dirname, 'src/constants/'),
            'assets': path.resolve(__dirname, 'src/assets/'),
            'store': path.resolve(__dirname, 'src/store/'),
            'reducers': path.resolve(__dirname, 'src/reducers/'),
            'actions': path.resolve(__dirname, 'src/actions/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
