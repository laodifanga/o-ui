<template>
	<div class="o-img" :style="styles" :class="classes">
		<img :style="imgStyles" ref="img" class="o-img__img" v-show="isLazy ? done : true" />
		<slot name="loading" v-if="!done"></slot>
	</div>
</template>

<script>
	import { version, prefix } from '../../../../package.json'
	import 'intersection-observer'
	export default {
		name: `${prefix}Img`,

		props: {
			src: '',
			errorSrc: '',
			lazy: { default: false },
			width: '',
			height: '',
			fit: ''
		},

		computed: {
			isLazy() {
				return false !== this.lazy
			},
			styles() {
				let { width, height } = this
				return { width, height }
			},
			classes() {
				let loading = (this.isLazy && !this.$slots.loading) ? !this.done : false
				return { [`${prefix.toLowerCase()}-img--loading`]: loading, [`${prefix.toLowerCase()}-img--done`]: this.done }
			},
			imgStyles() {
				if (!this.fit) return {}
				return { 'object-fit': this.fit }
			}
		},

		data() {
			return {
				done: false, // 图片是否加载完成
				error: false, // 懒加载错误
			}
		},

		mounted() {
			this.isLazy ? this.lazyload() : this.setSrc()
		},

		destroyed() {
			this.io && this.io.unobserve(this.$el)
		},

		methods: {
			setSrc() {
				this.$refs.img.src = this.src
			},
			lazyload() {
				this.io = new IntersectionObserver(entries => {
					entries.forEach(e => {
						let { isIntersecting } = e
						if (isIntersecting) {
							let _img = new Image
							_img.src = this.src
							_img.onload = (e) => {
								this.$refs.img.src = this.src
								this.done = true
								this.io.unobserve(this.$el)
								this.$emit('loaded', _img)
							}
							_img.onerror = (e) => {
								this.error = true
								this.done = true
								if(!this.errorSrc) return
								this.$refs.img.src = this.errorSrc
							}
						}
					})
				}, {})
				this.io.observe(this.$el)
			}
		}
	}
</script>

<style src="../style.styl" lang="stylus" />