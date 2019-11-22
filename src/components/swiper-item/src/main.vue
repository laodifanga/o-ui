<template>
	<div class="o-swiper-item" :style="styles" :class="classes" v-on="$listeners">
		<slot></slot>
	</div>
</template>

<script>
	import {version, prefix} from '../../../../package.json'
	import mixins from '../../../utils/childs_mixins'
	export default {
		name: `${prefix}SwiperItem`,

		mixins: [mixins],

		computed: {
			styles() {
				return {
					width: `${this.$super.itemWidth}`
				}
			},

			classes() {
				return {
					'o-swiper-item--vertical': this.$super.vertical
				}
			}
		},
	}
</script>

<style src="../style.styl" lang="stylus" />