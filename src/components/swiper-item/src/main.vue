<template>
	<div class="o-swiper-item" :style="styles" :class="classes" v-on="$listeners">
		<slot></slot>
	</div>
</template>

<script>
	import {version, prefix} from '../../../../package.json'
	export default {
		name: `${prefix}SwiperItem`,

		inject: ['$super'],

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

		created() {
			this.$super._addItems(this)
		}
	}
</script>

<style src="../style.styl" lang="stylus" />