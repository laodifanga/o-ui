<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/loading.vue" slot="more">源码</a>
		
		<demo>
			<span gap="m4" loading></span>
			<span gap="m4" loading color="main"></span>
			<span gap="m4" loading color="black"></span>
			<span gap="m4" loading color="white"></span>
		</demo>

		<demo title="loading=flip">
			<span gap="m4" loading="flip"></span>
			<span gap="m4" loading="flip" color="main"></span>
			<span gap="m4" loading="flip" color="black"></span>
			<span gap="m4" loading="flip" color="white"></span>
		</demo>

		<demo title="尺寸: s m l">
			<span v-for="d in size">
				<span gap="m4" :loading="d" ></span>
			</span>

			<span color="main" gap="m4" :loading="`${d} flip`" v-for="d in size"></span>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'loading | 加载',

		data() {
			return {
				size: ['s', 'm', '', 'l']
			}
		}
	}
</script>

<style>
</style>
