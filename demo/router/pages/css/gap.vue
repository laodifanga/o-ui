<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/gap.vue"
			slot="more">源码</a>

		<Demo title="gap间距 p m | gap=p* m*">
			<div color="desc">支持：{{gaps}}</div>
			<div color="bgmain white" :gap="`p${d} m${d}`" v-for="d in gaps.split(' ')" row><span border>gap="p{{d}}
					m{{d}}"</span></div>
		</Demo>

		<Demo title="单独控制">
			<div color="bgmain white" gap="pl15 pt20 pb30"><span border>gap="pl15 pt20 pb30"</span></div>
		</Demo>

	</block>
</template>

<script>
	export default {
		__name: 'gap | 间距',

		data() {
			return {
				gaps: '3 5 10 15 20 30 50'
			}
		}
	}
</script>

<style>
</style>