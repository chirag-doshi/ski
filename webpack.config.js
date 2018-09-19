const path = require('path');
const webpack = require('webpack');

module.exports ={
    entry : "./js/game.js",
    output: {
        filename: "bundle.js"
    },
    watch: true,
    mode: 'development'
}