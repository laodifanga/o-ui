<template>
	<div class="root">
		<div class="intro" text="tc" color="bgmain white">
			<img src="logo-inverse.png" class="intro-logo">
			<div class="intro-name" text="24">
				OUI
			</div>
		</div>
		
		<details details v-for="d,name,i in data" :key="i" open>
			<summary color="white" class="sticky">
				<div gap="p15" text="16" color="bgfail">{{name | magicName}}</div>
			</summary>
			
			<div class="list" v-for="l in d" color="title">
				<div gap="p15" row @click="$router.push({path: l.path})">
					<span text="16" col="1">{{l.name}}</span>
					<span text="14" color="desc" gap="mr6">{{l.desc}}</span> <span color="desc" arrow></span>
				</div>
			</div>
		</details>
		
		
		<keep-alive>
			<transition name="o-move-right">
				<router-view class="child-view"></router-view>
			</transition>
		</keep-alive>
	</div>
</template>

<script>
	import {getRoutes, getRouteData} from '@/utils'
	let data = getRouteData()
	
	export default {
		filters: {
			magicName(name) {
				return name
					.replace('css', '样式')
					.replace('components', '组件')
			}
		},
		
		data() {
			return {
				data
			}
		},
	}
</script>

<style lang="stylus" scoped>
	.child-view
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		width 100%
		height 100vh
		background: var(--bg);
		overflow: auto;
		
	.intro
		padding 2em 0
		overflow hidden
		background: var(--black);
		&-logo
			width 150px
			height 150px
		&-name
			padding 1em 0 0 0

	.sticky
		position: sticky; 
		z-index: 1;
		top: 0;
</style>