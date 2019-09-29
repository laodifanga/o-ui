<template>
	<div class="com-block">
		<div class="com-block-bar">
			<div class="com-block-bar-back" @click="$router.back()"><</div>
			<div class="com-block-bar-title">{{$route.meta && $route.meta.title || 'blank'}}</div>
		</div>
		<div class="com-block-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
</script>

<style lang="stylus" scoped>
	.com-block
		width 100%
		height 100%
		overflow auto
		&-bar
			background #fff
			padding 1em
			text-align center
			position sticky
			top 0
			display flex
			&-title
				flex 1
		&-content
			background none
</style>
