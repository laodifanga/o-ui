<template>
	<div class="com-demo">
		<div class="com-demo-title igtitle">{{title || '示例'}}</div>
		<div text="wrap" :style="{background: undefined !== background ? background : '#fff', padding: '.5em'}">
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
			position sticky
			z-index 1
			top 90px
			background var(--silver10)
			font-size 28px
			padding 1em
			font-weight 700
			color var(--black10)
		.igtitle
			top 45px
</style>
