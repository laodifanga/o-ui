<template>
	<div class="o-pager">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'Pager',
		
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="stylus">
	.o-pager 
		display: flex;
		padding 1em
		background teal
		border 1px solid blue
</style>
