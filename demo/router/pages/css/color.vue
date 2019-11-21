<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/color.vue"
			slot="more">源码</a>

		<demo>
			<div color="main" gap="mb10 mt10">
				document.body.style.setProperty('--main','{{randColor}}')
			</div>
			<span color="bgmain white" btn @click="changeColor">改变主题颜色</span>
		</demo>

		<demo>
			<div v-for="c in newBase.split(' ')">
				<div row="wrap aic jcc">
					<div size="w33" v-for="n in 3">
						<div gap="m5" shadow>
							<div :color="`bg${c}${n > 1 ? (n - 1) * 10 : ''}`" gap="p50"></div>
							<div :color="`${c}${n > 1 ? (n - 1) * 10 : ''}`" text="tc" gap="pt10 pb10">{{c}}{{n > 1 ? (n - 1) * 10 : ''}}</div>
						</div>
					</div>
				</div>
			</div>
		</demo>

	</block>
</template>

<script>
	export default {
		__name: 'color|颜色',



		data() {
			return {
				newBase: 'main yellow orange red blue green pink purple ghost slate black gray silver',
				baseColor: 'main,info,success,warning,fail,black,title,sub,cont,desc,disabled,placeholder,border,line,bg,white',

				randColor: '#327ede'
			}
		},

		methods: {
			getRandColor() {
				return '#' + Math.random().toString(16).substr(2, 6)
			},
			changeColor() {
				this.randColor = this.getRandColor()
				document.body.style.setProperty('--main', this.randColor)
			}
		}
	}
</script>

<style>
</style>