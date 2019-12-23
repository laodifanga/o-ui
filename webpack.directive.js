const {resolve, join} = require('path')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin') // 提取css
const VueLoaderPlugin = require('vue-loader/lib/plugin.js')
const autoprefixer = require('autoprefixer')
const postcssPxToViewport = require('postcss-px-to-viewport')


componentsEntry = {
  directive: './src/directive/index.js'
}

module.exports = {
	mode: 'production',
	
	entry: {
		...componentsEntry
	},
	
	output: {
		// filename: '[name][chunkhash:4].js',
		filename: 'directive.js',
		path: resolve(__dirname, './lib'),
		publicPath: '/',
		libraryTarget: 'umd',
		chunkFilename: '[name].chunk.js', // 三方 chunk 的名称
	},
	
	optimization:{ // 代码分离 vue 等 js块
		splitChunks:{
			chunks:'all' // initial(初始块)、async(按需加载块)、all(全部块)
		}
	},
	
	// 配置loader
	module: {
		rules: [
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				use: ['vue-loader']
			},
			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			
			{ // 打包css less stylus等
				test: /\.(styl|less|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader',
					
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								// autoprefixer({
								// 	"browsers": [
								// 		"Android >= 4.0",
								// 		"iOS >= 8.0"
								// 	]
								// }),
								postcssPxToViewport({
									viewportWidth: 750,      // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
									viewportHeight: 1334,    // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
									unitPrecision: 3,        // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
									viewportUnit: 'vw',      // 指定需要转换成的视窗单位，建议使用vw
									selectorBlackList: ['ignore', 'ig'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
									minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
									exclude: /(node_modules)/,
									mediaQuery: false       // 允许在媒体查询中转换`px`
								})
							]
						}
					},
					'stylus-loader',
					// 'vue-style-loader',
				]
			},
			
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8 * 1024,
							name: 'img/[name].[ext]'
						}
					}
				]
			}
			
		]
	},
	
	// 插件 需要手动引入
	plugins: [
		new webpack.ProgressPlugin(), // 进度
		// new CleanWebpackPlugin(), // 清空
		
		new MiniCssExtractPlugin({
		  filename: "directive.css",
		}),
		new VueLoaderPlugin(),
	]
}