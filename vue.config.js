module.exports = {
  lintOnSave: false,
	pages: {
		index: {
			entry: 'demo/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	
	// css: {
	// 	loaderOptions: {
	// 		postcss: {
	// 			plugins: [
	// 				// require('postcss-plugin-px2rem')({
	// 				// 	rootValue: 50, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
	// 				// 	exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
	// 				// 	// selectorBlackList: [], //要忽略并保留为px的选择器
	// 				// 	mediaQuery: true, //（布尔值）允许在媒体查询中转换px。
	// 				// 	minPixelValue: 2 //设置要替换的最小像素值(3px会被转rem)。 默认 0
	// 				// }),
					
	// 				require('postcss-px-to-viewport')({
	// 					viewportWidth: 750,      // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
	// 					viewportHeight: 1334,    // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
	// 					unitPrecision: 3,        // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
	// 					viewportUnit: 'vw',      // 指定需要转换成的视窗单位，建议使用vw
	// 					selectorBlackList: ['ignore', 'ig'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
	// 					minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
	// 					exclude: /(node_modules)/,
	// 					mediaQuery: false       // 允许在媒体查询中转换`px`
	// 				}),
	// 			]
	// 		}
	// 	}
	// },
	
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