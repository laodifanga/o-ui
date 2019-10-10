<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/gap.vue" slot="more">源码</a>

		<Demo title="gap间距 p m | gap=p* m*">
		  <div color="bgmain white" :gap="`p${d} m${d}`" v-for="d in gaps.split(' ')" row><span border>gap="p{{d}} m{{d}}"</span></div>
		</Demo>
		
		<Demo title="单独控制">
		  <div color="bgmain white" gap="pl16 pt32 pb24"><span border>gap="pl16 pt32 pb24"</span></div>
		</Demo>
	</block>
</template>

<script>
	export default {
		__name: 'gap | 间距',
		
		data() {
		  return {
		    gaps: '4 8 12 16 20 24 28 32 36'
		  }
		}
	}
</script>

<style>
</style>
