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
		
		
		<transition name="o-move-right" mode="out-in">
			<router-view class="child-view"></router-view>
		</transition>
	</div>
</template>

<script>
	const getRoutes = () => {
		let context = require.context('./pages', true, /\.vue$/)
		return context.keys().map(c => {
			let {__name} = context(c).default
			__name = __name ? __name.split('|') : []
			let path = '/root/' + c.substr(2, c.length - 6)
			let name = __name.length ? __name[0] : ''
			let desc = __name.length > 1 ? __name[1] : ''
			return {path, name, desc}
		})
	}
	
	let data = (() => {
		let routes = getRoutes(), data = {}
		routes.map(r => {
			let dir = r.path.split('/')[2]
			if(data[dir]) {
				data[dir].push(r)
			} else {
				data[dir] = [r]
			}
		})
		return data
	})()
	
	
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
