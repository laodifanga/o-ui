const {mkdirs, createDir, createFile, resolve, checkDir, err, log, success} = require('./index.js')
const {demoVueTemplate} = require('./template.js')

log('请输入要生成示例页面名称 xx/xx')

process.stdin.on('data', async chunk => {
	const input = String(chunk).trim().toString()
	
	if(! ~input.indexOf('/')) return err(`${input}格式不正确`)
	
	let inputs = input.split('/')
	let dir = inputs[0], name = inputs[1]
	
	let componentDir = resolve(`../demo/router/pages/${dir}`)
	let mainVue = resolve(componentDir, `${name}.vue`)
	
	if(!checkDir(componentDir)) {
		log(`正在生成示例目录 ${componentDir}`)
		await createDir(`${componentDir}`)
	}
	
	try {
		let componentName = name
		let res = await createFile(mainVue, demoVueTemplate(componentName))
		if(res === true) success(`示例文件${mainVue}创建完成！`)
	} catch(e) {
		err(e.message)
	}
	
	
	process.stdin.emit('end')
})