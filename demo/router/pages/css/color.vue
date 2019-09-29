<template>
	<block>
		<demo>
			<div color="oui">
				document.body.style.setProperty('--oui','{{randColor}}')
			</div>
			<span btn @click="changeColor">改变主题颜色</span>
		</demo>
		
		<demo title="颜色 ">
			<div row="wrap">
				<span border gap="p12 m4" :color="c" v-for="c in baseColor.split(',')">{{c}}</span>
			</div>
		</demo>
		
		<demo title="背景色">
			<div gap="p12 m4" :color="`bg${c}`" v-for="c in baseColor.split(',')">color="bg{{c}}"</div>
		</demo>
	</block>
</template>
	
<script>
	export default {
		__name: 'color|颜色',
		
		data() {
			return {
				baseColor: 'oui,white,black,gray,grey,silver',
				
				randColor: '#327ede'
			}
		},
		
		methods: {
			changeColor() {
				this.randColor = '#' + Math.random().toString(16).substr(2, 6)
				document.body.style.setProperty('--oui', this.randColor)
			}
		}
	}
</script>

<style>
</style>
