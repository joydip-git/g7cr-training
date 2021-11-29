//write code to configure webpack with loaders, plugins etc.
//this configuration should be part of an obejct
// the exported object with configuration will be supplied to the webpack tool

const htmlWebpackplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: {
    //     main: path.resolve(__dirname, 'src', 'index.ts'),
    //     repo: path.resolve(__dirname, 'src/data', 'employeerepository.ts'),
    //     manager: path.resolve(__dirname, 'src/manager', 'employeemanager.ts'),
    //     employee: path.resolve(__dirname, 'src/models', 'employee.ts')
    // }
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/myapp')
    },
    module: {
        rules: [
            {
                test: /\.(htm|html)$/,
                use: 'html-loader'
            },
            {
                test: /\.(css)$/,
                use: ['css-loader', 'style-loader']
            },
            {
                test: /\.(ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 4000
    }
}