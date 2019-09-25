module.exports = {
  lintOnSave: false,
	pages: {
		index: {
			entry: 'demo/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},
	
	css: {
		extract: false,
	},
	
	// // 扩展 webpack 配置，使 package 加入编译
	// chainWebpack: config => {
	// 	config.module
	// 		.rule('js')
	// 		.include
	// 		.add('/lib')
	// 		.end()
	// 		.use('babel')
	// 		.loader('babel-loader')
	// 		.tap(options => options)
	// }
	
}