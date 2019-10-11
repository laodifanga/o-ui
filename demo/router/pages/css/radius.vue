<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/radius.vue" slot="more">源码</a>
		
		<demo v-for="d in data" :title="`radius=${d}`">
			<div text="tc" border="c" color="main" gap="p36" :radius="d">{{d}}</div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'radius | 圆角',

		data() {
			return {
				data: ['默认', 8, 12, 16, 50, 100]
			}
		}
	}
</script>

<style>
</style>
