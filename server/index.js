const express = require("express");
const path = require("path");
const app = express();
const webpack = require('webpack');
const webpackMiddleware = require("webpack-dev-middleware");
const webpackCongif = require("../webpack.config");
const webpackHotReload = require ("webpack-hot-middleware");
const compiler = webpack(webpackCongif);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackCongif.output.publicPath,
    noInfo: true
}));

app.use(webpackHotReload(compiler));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(3000,console.log('running on 3000'))