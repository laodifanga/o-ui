<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/loading.vue" slot="more">源码</a>
		
		<demo>
			<span gap="m4" loading></span>
			<span gap="m4" loading color="main"></span>
		</demo>

		<demo>
			<span gap="m4" loading="full"></span>
			<span gap="m4" loading="full" color="main"></span>
		</demo>

		<demo>
			<span gap="m4" :loading="d" v-for="d in size"></span>
		</demo>

		<demo>
			<span color="main" gap="m4" :loading="`${d} full`" v-for="d in size"></span>
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
