<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/color.vue"
			slot="more">源码</a>



		<demo>
			<div color="main" gap="mb10 mt10">
				<div gap="p10">1，css方式，直接修改变量如：:root { --main: {{randColor}}; }</div>
				<div gap="p10">
					2，JS方式：
					document.body.style.setProperty('--main','{{randColor}}')
				</div>
			</div>
			<span color="bgmain white" btn @click="changeColor">改变主题颜色</span>
		</demo>

		<demo title="主色">
			<div row="wrap aic jcc">
				<div size="w33" v-for="n in ['-10', '', '10']">
					<div gap="m5" shadow radius="10" text="hidden">
						<div :color="`bgmain${n}`" gap="p30"></div>
						<div :color="`main${n}`" text="tc" gap="pt10 pb10">
							main{{n}}</div>
					</div>
				</div>
			</div>
		</demo>

		<demo>
			<div v-for="c in baseColors.split(' ')">
				<div row="wrap aic jcc">
					<div size="w33" v-for="n in ['-10', '', '10']">
						<div gap="m5" shadow radius="10" text="hidden">
							<div :color="`bg${c}${n}`" gap="p30"></div>
							<div :color="`${c}${n}`" text="tc b" gap="pt5 pb5">
								{{c}}{{n}}</div>
						</div>
					</div>
				</div>
			</div>
		</demo>



		<demo title="网页原始色">
			<div row="wrap jcsb">
				<div size="w25" v-for="d, i in webColors.split(' ')" radius text="hidden" gap="m5">
					<div row text="tc" color="white">
						<div col="1" gap="pt20 pb20" :style="{background: d}">O</div>
						<div col="1" gap="pt20 pb20" :color="`bg${d}`">N</div>
					</div>
					<div :color="d" style="background: #eee;" text="tc" gap="p5">
						{{d}}
					</div>
				</div>
			</div>
		</demo>

		<demo title="黑白">
			<div row>
				<div gap="m5" shadow>
					<div color="bgblack" gap="p30"></div>
					<div color="black" text="tc" gap="pt10 pb10">
						black</div>
				</div>
				<div gap="m5" shadow>
					<div color="bgwhite" gap="p30"></div>
					<div color="bgblack white" text="tc" gap="pt10 pb10">
						white</div>
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
				randColor: '#327ede',

				grays: ['gray', 'silver'],

				baseColors: 'orange yellow lime green aqua teal blue navy fuchsia purple red maroon silver gray black',
				webColors: 'orange yellow lime green aqua teal blue navy fuchsia purple red maroon silver gray black',
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