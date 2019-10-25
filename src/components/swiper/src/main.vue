<template>
	<div class="o-swiper" ref="swiper">
		<div class="o-swiper__frame" :class="{'o-swiper__frame--vertical': vertical}" ref="frame">
			<slot></slot>
		</div>

		<div class="o-swiper__dots" v-if="dots">
			<div class="items" v-for="d,i in items" :key="i" :class="{'items--act': i === index}">{{i}}</div>
		</div>
	</div>
</template>

<script>
	import { version, prefix } from '../../../../package.json'
	import touchtrack from '../../../utils/touchtrack_mixins'
	const DURATION = 250
	export default {
		name: `${prefix}Swiper`,

		mixins: [touchtrack],

		props: {
			current: {
				default: 0
			},
			dots: { // 指示点
				default: false
			},
			vertical: { // 垂直滑动
				default: false
			},
			autoCenter: {
				default: true
			},
			itemWidth: {
				default: '100%'
			},
			autoHeight: { // 高度自适应
				default: false
			},
			loop: { // 循环
				default: false
			},
			autoPlay: {
				default: false
			}
		},

		provide() {
			return {
				$super: this
			}
		},

		watch: {
			index(n, o) {
				this.$emit('change', n, o)
				n != o && this._move()
			},
			current(n, o) {
				this.index = n
			}
		},

		data() {
			return {
				items: [],
				index: 0, // 跳转页
				userTracking: false, // 用户跟踪
			}
		},

		created() {
			this._current = this.index // 移动结束前当前页
			this._distance = 0 // 移动距离
			this._speed = 0 // 移动速度
			this._animating = false // 动画中
			this._itemOffset = []
			this._itemSize = []
			this._timer = null
		},

		mounted() {
			this.touchtrack(this.$refs.swiper, this._track, true)
			this._setViewSize()
			this._addEvtTransitionEnd()
			this._setCurrent()
			if (this.autoHeight) this._autoHeight()
			if (this.autoPlay) this._autoPlay()
		},

		methods: {
			moveTo(index, duration = DURATION) {
				this.index = index
				this._caclIndex()
			},
			prev() {
				this.moveTo(this.index - 1)
			},
			next() {
				this.moveTo(this.index + 1)
			},
			_setCurrent() {
				this.index = this.current
				this._move(0, 0)
				setTimeout(() => {
					this.$emit('animated', this.index)
				})
			},
			_setViewSize() {
				let { offset, sizes } = this._calcItemSize()
				this._itemOffset = offset
				this._itemSize = sizes
			},
			_addItems(vnode) {
				this.items.push(vnode)
			},
			_autoPlay() {
				if (!this._timer) {
					this._timer = setInterval(() => {
						this.index++
						if (this.index > this.items.length - 1) {
							this.index = 0
						}
					}, this.autoPlay)
				}
			},
			_stopAutoPlay() {
				clearInterval(this._timer)
				this._timer = null
			},
			_autoHeight() {
				this.$refs.swiper.style.height = this._itemSize[this.index].height + 'px'
			},
			_addEvtTransitionEnd() {
				this.$refs.frame.addEventListener('webkitTransitionEnd', $e => {
					this._animating = false
					this.$emit('animated', this.index)
					if (this.autoHeight) this._autoHeight()
					if (this.autoPlay) this._autoPlay()
				})
			},
			_track(e) {
				if (e.type === 'start') return this._onstart()
				if (e.type === 'end') return this._onend()
				if (e.type === 'cancel') return this._onend(true)
				if (this.userTracking) {
					let x = Math.abs(e.detail.dx), y = Math.abs(e.detail.dy)
					if (x >= y && this.vertical) { // 用户横向滑动
						this.userTracking = false
					} else { // 用户纵向滑动
						if (x <= y && !this.vertical) {
							this.userTracking = false
						}
					}
					if (!this.userTracking) return

					this._onmove(e.detail)
					return false
				}
			},
			_onstart() {
				this.userTracking = true
				this._distance = 0
				this._speed = 0
				this._animating = false
			},
			_getSwiperSize() {
				return this.vertical ? (this.$refs.swiper.offsetHeight - 0) : (this.$refs.swiper.offsetWidth - 0)
			},
			_onend(isCancel = false) {
				this.userTracking = false
				this._current = this.index
				this._animating = false
				if (!isCancel && (this._speed > 1 || Math.abs(this._distance) >= this._getSwiperSize() / 2)) { // 非取消||移动距离||时间够快
					this._distance > 0 ? this.index-- : this.index++
					this._caclIndex()
					// return this._move()
				}
				return this._move()
			},
			_onmove({ dx, dy, sx, sy }) {
				this._stopAutoPlay()

				this._distance = this.vertical ? dy : dx
				this._speed = this.vertical ? Math.abs(sy) : Math.abs(sx)
				this._move(this._distance, 0)
			},
			_move(offset = 0, duration = DURATION) {
				this._caclIndex()
				if (duration > 0) {
					this._animating = true
					this.$emit('animating', this.index)
				}

				let _offset = this._setItemOffset(-this._itemOffset[this.index] + offset),
					transform = this.vertical ? `translate3d(0,${_offset}px,0)` : `translate3d(${_offset}px,0,0)`,
					frame = this.$refs.frame
				frame.style.webkitTransition = `-webkit-transform ${duration}ms ease-in-out`
				frame.style.webkitTransform = transform
			},
			_caclIndex() {
				let total = this.items.length
				if (this.index > total - 1) {
					return this.index = this.loop ? 0 : total - 1
				}
				if (this.index < 0) {
					return this.index = this.loop ? total - 1 : 0
				}
			},
			_getItemSize() {
				let rect = this.items[this._current].$el.getBoundingClientRect()
				return this.vertical ? rect.height : rect.width
			},
			_calcItemSize() {
				let n = 0, offset = [0], sizes = []
				this.items.forEach((item, i) => {
					let rect = item.$el.getBoundingClientRect(),
						size = {
							width: this.vertical ? rect.height : rect.width,
							height: this.vertical ? rect.width : rect.height,
						}
					offset.push(n += size.width)
					sizes.push(size)
				})
				return { offset, sizes }
			},
			_setItemOffset(offset) {
				let swiperSize = this._getSwiperSize()
				let diff = swiperSize - this._itemSize[this.index].width
				if (this.index < 1) { // 第一个
					return offset
				}
				if (this.index >= this.items.length - 1) { // 最后一个
					return diff + offset
				}
				if (this.autoCenter) return diff / 2 + offset
				return offset
			}
		}
	}
</script>

<style src="../style.styl" lang="stylus" />