const QiniuUploadPlugin  = require('./webpack_plugins/QiniuUploadPlugin')
let path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = {
  lintOnSave: false,
	productionSourceMap: false,
	// publicPath: process.env.NODE_ENV === 'production' ? '//q1jwj5nud.bkt.clouddn.com/' : './',
	pages: {
		index: {
			entry: 'demo/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},
	
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('demo'))
			.set('src', resolve('src'))
	},

	// 上传到七牛云
	// configureWebpack:  config => {
	// 	if(process.env.NODE_ENV === 'production') {
	// 		config.plugins.push( new QiniuUploadPlugin(QiniuUploadPlugin.config) )
	// 	}
	// }

	// configureWebpack: {
	// 	plugins: [
	// 		new QiniuUploadPlugin(QiniuUploadPlugin.config)
	// 	]
	// }
	
	// // 扩展 webpack 配置，使 src 加入编译
	// chainWebpack: config => {
	// 	config.resolve.alias
	// 		.set('@', resolve('demo'))
	// 	config.module
	// 		.rule('js')
	// 		.include.add('/src')
	// 		.end()
	// 		.use('babel')
	// 		.loader('babel-loader')
	// 		.tap(options => options)
	// }
	
}
