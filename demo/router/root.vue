<template>
	<div class="root">
		<div class="intro" text="tc">
			<img src="logo-inverse.png" class="intro-logo">
			<div class="intro-name">
				OUI
			</div>
		</div>
		
		<details details v-for="d,name,i in data" :key="i" :open="true">
			<summary color="white" class="sticky">
				<div gap="p15" text="12" color="bgmain">
					<span text="16">{{name | magicName}} </span>
					<span tag="sup" color="bgwhite main">{{d.length}}</span>
				</div>
			</summary>
			
			<div class="list" v-for="l in d" color="title">
				<div gap="p15" row @click="$router.push({path: l.path})">
					<span text="16" col="1">
						{{l.name}}
						<span tag="" v-if="l.length > 2" radius color="bgsilver-10 white">EXT</span>
					</span>
					
					<span text="14" color="gray" gap="mr5">{{l.desc}}</span> <span color="gray" arrow></span>
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
					.replace('components', '内置组件')
					.replace('ext', '扩展组件')
					.replace('service', '服务')
					.replace('form', '表单')
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
		height 100vh;
		background: #eee;
		overflow: auto;
		
	.intro
		padding 2em 0
		overflow hidden
		background: linear-gradient(0deg, var(--main) 0%,#3d99be 31%,#56317a 100%);
		&-logo
			width 150px
			height 150px
		&-name
			padding 1em 0 0 0
			color white
			font-size 44px

	.sticky
		position: sticky; 
		z-index: 1;
		top: 0;
</style>