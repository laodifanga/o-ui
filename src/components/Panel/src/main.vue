<template>
	<div class="o-panel ignore2 not2vw2">
		<slot></slot>
		
		<div class="ig-not not">
			ss
		</div>
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
	.not {
		width 100px
		background: #000;
		color yellow
	}
	.o-panel 
		padding 1em
		background yellow
		margin 0 auto
		box-sizing border-box
		
		width 630px
		height 826px
		border 1px solid blue
</style>
