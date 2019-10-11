<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/transition.vue" slot="more">源码</a>
		
		<demo>
			<div row="wrap jcsb">
				<div v-for="d in data" border="c" color="line" gap="m4">
					<div gap="p12" text="tc">
						<span btn="plat" color="main" @click="change(d)">{{!d.flag ? '显示' : '隐藏'}}动画</span>
						<div gap="pt12" color="desc">o-{{d.name}}</div>
					</div>
					<div gap="p8">
						<transition :name="name">
							<div text="tc 12" v-if="d.flag" gap="p12" color="bgmain white">{{d.desc}}</div>
						</transition>
					</div>
				</div>
			</div>
		</demo>

		<demo title="o-spin o-fade o-zoom">
			<div row="wrap jcsb">
				<div border="c" color="line" gap="m4">
					<div gap="p8">
						<div o-spin text="tc 12" gap="p12" color="bgmain white">o-spin</div>
					</div>
				</div>

				<div border="c" color="line" gap="m4">
					<div gap="p8">
						<div o-fade text="tc 12" gap="p12" color="bgmain white">o-fade</div>
					</div>
				</div>

				<div border="c" color="line" gap="m4">
					<div gap="p8">
						<div o-zoom text="tc 12" gap="p12" color="bgmain white">o-zoom</div>
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
