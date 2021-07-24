const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');


module.exports = {
    mode: 'development',
    // entry: path.join(__dirname,'./src/main.js'),
    entry: ['@babel/polyfill', './src/main.js'],
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './src',
        hot: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            title: 'app',
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.s(a|c)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    },
                },
                // generator: {
                //     filename: 'images/[base]',
                // },
            },
            // 'transform-runtime' 插件告诉 Babel
            // 要引用 runtime 来代替注入。
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                }
                }
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        },
        extensions: ['.ts', '.js', '.vue'],
    },
    
};