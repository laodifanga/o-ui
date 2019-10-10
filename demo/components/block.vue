<template>
	<div class="com-block">
		<div class="com-block-bar">
			<div class="com-block-bar-back" @click="$router.back()"><span arrow="l"></span></div>
			<div class="com-block-bar-title" color="title">{{$route.meta && $route.meta.title || 'blank'}}</div>
			<div class="com-block-bar-right">
				<slot name="more"></slot>
			</div>
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
			padding 0 1em
			height 90px
			line-height 90px
			text-align center
			position sticky
			z-index 1
			top 0
			display flex
			&-title
				flex 1
		&-content
			background none
</style>
