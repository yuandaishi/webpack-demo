const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ["@babel/preset-react", {
                                "runtime": "automatic"
                            }],

                        ]
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}