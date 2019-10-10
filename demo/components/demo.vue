<template>
	<div class="com-demo">
		<div class="com-demo-title">{{title || '示例'}}</div>
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
			top 90px
			background var(--line)
			font-size 28px
			padding 1em
			font-weight 700
			color var(--title)
</style>
