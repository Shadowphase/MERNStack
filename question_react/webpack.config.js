const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

let webpack = require("webpack"),//build tool,configuration, minification and bundling tool
path = require("path"), //path module of node framework
DIST_DIR = path.resolve(__dirname,"dist"), // distribution directory
SRC_DIR = path.resolve(__dirname,"src"), // source directory
UglifyJSPlugin = require('uglifyjs-webpack-plugin'),

webpackConfig = {
    entry:SRC_DIR+"/index.js",
    output:{
        path: DIST_DIR+"/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module:{
        rules:[
            {
                test:/\.js?/,
                include:SRC_DIR,
                loader: "babel-loader",
                enforce: 'pre',
                query: {
                    presets: ["@babel/env", "@babel/react"],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            },
            {
                test:/\.(css)$/,
                include:SRC_DIR,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                cache:true,
                sourceMap:true
            })
        ]
    },
    resolve:{
        extensions:['.js', '.jsx']
    },
    devServer:{
        contentBase:[
            path.join(DIST_DIR),
            path.join(SRC_DIR),
        ],
        inline: true,
        host: "localhost",
        port: 3031,
        historyApiFallback:{
            index:'/'
        },
        watchContentBase:true
    }
};

module.exports = webpackConfig;