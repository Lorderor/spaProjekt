var webpack = require('webpack');

module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
            // ,
            // {
            //     test: /\.(js|jsx)$/,
            //     include: paths.appSrc,
            //     loader: require.resolve('babel-loader'),
            //     options: {
            //         // This is a feature of `babel-loader` for webpack (not Babel itself).
            //         // It enables caching results in ./node_modules/.cache/babel-loader/
            //         // directory for faster rebuilds.
            //         cacheDirectory: true,
            //         plugins: ['react-hot-loader/babel'],
            //     },
            // }
        ]
    }

};