<template>
	<div class="com-demo">
		<div class="com-demo-title">{{title || '示例'}}</div>
		<div :style="{background: undefined !== background ? background : '#fff', padding: '.5em'}">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'background']
	}
</script>

<style lang="stylus" scoped>
	.com-demo
		&-title
			font-size 28px
			padding 1em
			color #999
</style>
