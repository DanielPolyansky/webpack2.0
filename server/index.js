const express = require("express");
const path = require("path");
const app = express();
const webpack = require('webpack');
const webpackMiddleware = require("webpack-dev-middleware");
const webpackCongif = require("../webpack.config");

app.use(webpackMiddleware(webpack(webpackCongif)));

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(3000,console.log('running on 3000'))