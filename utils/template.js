const {version, prefix} = require('../package')
const ucword = (str) => str.split('-').map( i => i.slice(0, 1).toUpperCase() + i.slice(1) ).join('')
module.exports = {
	// vue模板
	vueTemplate: names => {
		let name = ucword(names)
		return `<template>
	<div class="o-${names.toLowerCase()}">
		${name}组件
	</div>
</template>

<script>
	import {version, prefix} from '../../../../package.json'
	export default {
		name: \`\$\{prefix\}${name}\`,
	}
</script>

<style src="../style.styl" lang="stylus" />`
	},
	
	// js模板
	indexJsTemplate: name => `import main from './src/main.vue'

main.install = (Vue) => {
	Vue.component(main.name, main)
}

export default main`,
	
	// style模板
	styleTemplate: name => `// ${prefix.toLowerCase()}__element--modifier
@import '../../base'
.${prefix.toLowerCase()}
	&-${name}
		// css`,
	
	// readme.md 模板
	readmeTemplate: name => `## ${name}
---

> props

参数 | 类型 | 默认值 | 说明
--- | --- | --- | ---
xxx | - | - | -


> slot

名称 | scope | 说明
--- | --- | ---
default | - | -

> emit

事件名称 | 说明
--- | --- |
xxx | -
`,
	
	// 示例模板
	demoVueTemplate: (name, dir) => {
		return `<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/${dir}/${name}.vue" slot="more">源码</a>
		
		<demo>
			${name}
		</demo>
	</block>
</template>

<script>
	export default {
		__name: '${name} | 说明'
	}
</script>

<style>
</style>
`
	}
}