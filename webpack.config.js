const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: [
        "webpack-hot-middleware/client",
        path.join(__dirname, "client/index.js")
        ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: [/\.css$/,/\.scss$/],
                include:path.resolve(__dirname, "client/styles"), 
                use: ["style-loader","css-loader","sass-loader"]
                /*ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:["css-loader","sass-loader"],
                    publicPath:"/dist/"
                })*/
            },
            {
                test: [/\.js$/,/\.jsx$/],
                include: path.resolve(__dirname, "client"), 
                use:["react-hot-loader", "babel-loader"],
            },
            {
                test: [/\.jpg$/,/\.jpeg$/,/\.png$/,/\.gif$/,/\.svg$/],
                include: path.resolve(__dirname, "client/images"),
                use:["file-loader"],
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        stats: "errors-only",
        open: true,
        hot: true
    },

    plugins: [
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            template: "./server/index.html",
            minify: {
                collapseWhitespace: true,
                hash: true
            }
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
]
}