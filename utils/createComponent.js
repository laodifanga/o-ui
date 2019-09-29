const {mkdirs, createDir, createFile, resolve, checkDir, log, success} = require('./index.js')
const {vueTemplate, indexJsTemplate, styleTemplate} = require('./template.js')
log('请输入要生成的组件的名称')

process.stdin.on('data', async chunk => {
	const input = String(chunk).trim().toString()
	
	// 组件目录
	let componentDir = resolve(`../src/components/${input}`)
	let mainVue = resolve(componentDir, 'src/main.vue')
	let indexJs = resolve(componentDir, 'index.js')
	let styleStyl = resolve(componentDir, 'style.styl')
	
	if(checkDir(componentDir)) {
		return err(`${input}已经存在，请重新输入组件名称`)
	}
	
	try {
		log(`正在生成组件目录 ${componentDir}`)
		await createDir(componentDir)
		await createDir(`${componentDir}/src`)
		let componentName = input
		await createFile(mainVue, vueTemplate(componentName))
		success(`${mainVue}创建成功`)
		
		await createFile(indexJs, indexJsTemplate(componentName))
		success(`${indexJs}创建成功`)
		
		await createFile(styleStyl, styleTemplate(componentName))
		success(`${styleStyl}创建成功`)
	} catch(e) {
		err(e.message)
	}
	
	success('组件相关文件创建完成！')
	process.stdin.emit('end')
})