module.exports = {
  lintOnSave: false,
	pages: {
		index: {
			entry: 'demo/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	
	// 扩展 webpack 配置，使 src 加入编译
	chainWebpack: config => {
		config.module
			.rule('js')
			.include
			.add('/src')
			.end()
			.use('babel')
			.loader('babel-loader')
			.tap(options => options)
			.end()
	}
	
}