<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/service/pop.vue" slot="more">源码</a>
		
		<demo>
			<span btn @click="toast">弹出toast</span>
			<span btn @click="$pop.toast({mask: true})">不可穿透点击</span>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'pop | $pop',

		methods: {
			toast() {
				this.$pop.toast({
					content: '你好，朋友！',
					delay: 2000,
					type: 'bottom',
					transName: 'o-move-bottom',
					icon: ''
				})
			}
		}
	}
</script>

<style>
</style>
