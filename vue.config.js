let path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = {
  lintOnSave: false,
	productionSourceMap: false,
	pages: {
		index: {
			entry: 'demo/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},
	
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
