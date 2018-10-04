const path = require('path');
const htmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: path.resolve('./src'),
    entry: __dirname + '/src/study/main.js',
    devtool: 'eval-source-map',
    output: {
        path: __dirname + "/public",
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true // 实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader','postcss-loader','sass-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','postcss-loader','sass-loader']
            },
        ]
    },

    plugins:[
        new htmlwebpackPlugin({
            template:'index.html',
        })
    ]

}