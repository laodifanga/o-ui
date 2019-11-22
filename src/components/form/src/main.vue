<template>
	<div class="o-form">
		<slot></slot>
	</div>
</template>

<script>
	import {version, prefix} from '../../../../package.json'
	import mixins from '../../../utils/parents_mixins'
	export default {
		name: `${prefix}Form`,

		mixins: [mixins],

		props: {
			type: { default: 0 }
		},

		methods: {
			check() {
				this.items.forEach(i => i.check())
				return this.items.every(i => i.getValid())
			},
			reset() {
				this.items.forEach(i => i.reset())
			}
		}
	}
</script>

<style src="../style.styl" lang="stylus" />