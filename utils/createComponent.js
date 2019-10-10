const {mkdirs, createDir, createFile, resolve, checkDir, err, log, success} = require('./index.js')
const {vueTemplate, indexJsTemplate, styleTemplate, readmeTemplate} = require('./template.js')
log('请输入要生成的组件的名称')

process.stdin.on('data', async chunk => {
	const input = String(chunk).trim().toString()
	
	// 组件目录
	let componentDir = resolve(`../src/components/${input}`)
	let mainVue = resolve(componentDir, 'src/main.vue')
	let indexJs = resolve(componentDir, 'index.js')
	let styleStyl = resolve(componentDir, 'style.styl')
	let readmeMd = resolve(componentDir, 'README.md')
	
	if(checkDir(componentDir)) {
		return err(`${input}已经存在，请重新输入组件名称`)
	}
	
	try {
		log(`正在生成组件目录 ${componentDir}`)
		await createDir(componentDir)
		await createDir(`${componentDir}/src`)
		let componentName = input
		let res = await createFile(mainVue, vueTemplate(componentName))
		if(res === true) success(`${mainVue}创建成功`)
		
		res = await createFile(indexJs, indexJsTemplate(componentName))
		if(res === true) success(`${indexJs}创建成功`)
		
		res = await createFile(styleStyl, styleTemplate(componentName))
		if(res === true) success(`${styleStyl}创建成功`)
		
		res = await createFile(readmeMd, readmeTemplate(componentName))
		if(res === true) success(`${readmeMd}创建成功`)
	} catch(e) {
		err(e.message)
	}
	
	success('组件相关文件创建完成！')
	process.stdin.emit('end')
})