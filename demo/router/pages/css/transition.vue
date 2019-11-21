<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/transition.vue" slot="more">源码</a>
		
		<demo>
			<div row="wrap jcsb">
				<div v-for="d in data" size="w33">
					<div gap="p10" text="tc">
						<span btn="plat" size="w100" color="main" @click="change(d)">{{!d.flag ? '显示' : '隐藏'}}</span>
						<div gap="pt10" color="slate10">o-{{d.name}}</div>
					</div>
					<div gap="p10">
						<transition :name="name">
							<div text="tc 12" v-if="d.flag" gap="pt30 pb30" color="bgslate white">{{d.desc}}</div>
						</transition>
					</div>
				</div>
			</div>
		</demo>

		<demo title="o-spin o-fade o-zoom">
			<div row="wrap jcsb">
				<div border="c" color="silver" gap="m4">
					<div gap="p10">
						<span btn="ico" color="bgmain white" radius="100" text="42" o-spin row="aic jcc">
							<i class="ico-loader" ></i>
						</span>
					</div>
				</div>

				<div border="c" color="silver" gap="m4">
					<div gap="p10">
						<div o-fade text="tc 12" gap="p10" color="bgmain white">o-fade</div>
					</div>
				</div>

				<div border="c" color="silver" gap="m4">
					<div gap="p10">
						<div o-zoom text="tc 12" gap="p10" color="bgmain white">o-zoom</div>
					</div>
				</div>

			</div>
		</demo>


	</block>
</template>

<script>
	export default {
		__name: 'transition | 动画',

		data() {
			return {
				name: 'o-fade',

				flag: true,

				data: [
					{name: 'fade', desc: '隐现', flag: true},
					{name: 'zoom', desc: '缩放', flag: true},
					{name: 'move-top', desc: '上移', flag: true},
					{name: 'move-right', desc: '右移', flag: true},
					{name: 'move-bottom', desc: '下移', flag: true},
					{name: 'move-left', desc: '左移', flag: true},
				]
			}
		},

		methods: {
			change(d) {
				this.name = `o-${d.name}`
				this.$nextTick(() => {
					d.flag = !d.flag
				})
			}
		}
	}
</script>

<style>
</style>
