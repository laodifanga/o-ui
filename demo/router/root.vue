<template>
	<div class="root">
		<details details>
			<summary>
				分组名称
			</summary>
			
			<router-link to="/root">root</router-link>
		</details>
		
		<details details>
			<summary>
				分组名称
			</summary>
			
			<router-link to="/root/css/avatar">avatar</router-link>
		</details>
		
		
		
		
		<transition name="o-move-right" mode="out-in">
			<router-view class="child-view"></router-view>
		</transition>
	</div>
</template>

<script>
</script>

<style lang="stylus" scoped>
	.child-view
		position: fixed;
		top: 0;
		left: 0;
		width 100%
		height 100vh
		background: #f0eff4;
		overflow: auto;
</style>
