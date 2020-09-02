const path = require('path');
module.exports = [{
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js.txt',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        csharp: 'commonjs2 csharp'
    },
    devtool: 'source-map',
    mode: 'development'
}];
