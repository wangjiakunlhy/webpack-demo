const path = require('path');
module.exports = {
    context: path.resolve('./src'),
    entry: __dirname + '/src/study/main.js',
    output: {
        path: __dirname + "/public",
        filename: "js/dev-bundle.js"
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
        ]
    },
}