<template>
	<div class="o-panel">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'Panel',
		
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="stylus">
	.o-panel 
		padding 1em
		background yellow
		margin 0 auto
		box-sizing border-box
		
		width 630px
		height 826px
		border 1px solid blue
</style>
