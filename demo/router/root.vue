<template>
	<div class="root">
		<details details v-for="d,name,i in data" :key="i" open>
			<summary>
				{{name.replace('css', 'css样式库')}}
			</summary>
			
			<div class="list" v-for="l in d">
				<router-link :to="{path: l.path}">{{l.name}} - {{l.desc}}</router-link>
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
		data() {
			return {
				data
			}
		}
	}
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
