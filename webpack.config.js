const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.css$/,/\.scss$/], 
                use: ["style-loader","css-loader","sass-loader"]
                /*ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:["css-loader","sass-loader"],
                    publicPath:"/dist/"
                })*/
            },
            {
                test: [/\.js$/,/\.jsx$/],
                exclude: path.resolve(__dirname,"node_modules"), 
                use:["babel-loader"],
            },
            {
                test: [/\.jpg$/,/\.jpeg$/,/\.png$/,/\.gif$/,/\.svg$/], 
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
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                hash: true
            }
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
]
}