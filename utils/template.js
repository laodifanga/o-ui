const {version, prefix} = require('../package')

module.exports = {
	// vue模板
	vueTemplate: name => {
		name = name.toLowerCase().slice(0, 1).toUpperCase() + name.slice(1)
		return `<template>
	<div class="o-${name.toLowerCase()}">
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
	styleTemplate: name => `.o-${name}`,
	
	// 示例模板
	demoVueTemplate: name => {
		return `<template>
	<block>
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