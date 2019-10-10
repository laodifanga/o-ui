<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/color.vue" slot="more">源码</a>
		
		<demo>
			<div color="main" gap="mb12 mt12">
				document.body.style.setProperty('--main','{{randColor}}')
			</div>
			<span color="bgmain white" btn @click="changeColor">改变主题颜色</span>
		</demo>
		
		<demo title='文本色 color="main" 背景色 color="bgmain"'>
			<div row="wrap aic jcc">
				<div style="width:35%" gap="p20 m4" :color="`bg${c} ${~['border', ,'line', 'bg', 'white'].indexOf(c) ? 'cont' : 'white'}`" v-for="c in baseColor.split(',')">{{c}}</div>
			</div>
		</demo>
	</block>
</template>
	
<script>
	export default {
		__name: 'color|颜色',

	
		
		data() {
			return {
				baseColor: 'main,info,success,warning,fail,black,title,cont,desc,disabled,border,line,bg,white',
				
				randColor: '#327ede'
			}
		},
		
		methods: {
			changeColor() {
				this.randColor = '#' + Math.random().toString(16).substr(2, 6)
				document.body.style.setProperty('--main', this.randColor)
			}
		}
	}
</script>

<style>
</style>
