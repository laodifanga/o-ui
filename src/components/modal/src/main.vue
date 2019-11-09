<template>
	<div>
		<transition name="o-fade" appear>
			<div class="o-mask" :style="styles" v-if="mask && flag" @click="close(true)"></div>
		</transition>
		<transition :name="transName" @after-leave="_afterLeave">
			<div class="o-modal" :class="classes" v-if="flag" @click="close(true)">
				<div class="content" @click.stop :class="{'not-custom': !custom}"><slot></slot></div>
			</div>
		</transition>
	</div>
</template>

<script>
	import { version, prefix } from '../../../../package.json'
	export default {
		name: `${prefix}Modal`,

		props: {
			transName: { // 动画，结合自带动画名称o-fade, o-move-bottom ...
				default: 'o-zoom'
			},
			type: { // 弹出方式 top center bottom left right
				default: 'center'
			},
			show: { // 显示弹窗
				default: false,
			},
			custom: { // 是否自定义
				default: false,
			},
			maskBackground: '',
			maskClick: { // 蒙层点击是否关闭弹窗
				default: true
			},
			mask: { // 是否显示蒙层
				default: true,
			}
		},

		computed: {
			styles() {
				return {
					background: this.maskBackground || `rgba(0,0,0,.7)`
				}
			},

			classes() {
				return {
					[`${prefix.toLowerCase()}-modal__${this.type}`]: true,
					[`${prefix.toLowerCase()}-modal--events`]: !this.mask
				}
			}
		},

		watch: {
			show(n) {
				n ? this.open() : this.close()
			},
		},

		data() {
			return {
				flag: false
			}
		},

		methods: {
			open() {
				this.flag = true
				this.$emit('change', {value: true})
				this._appendToBody()
			},
			close(type) {
				if(!this.maskClick && type) return
				this.flag = false
				this.$emit('change', {value: false})
			},
			_afterLeave() {
				this._removeFromBody()
			},
			_appendToBody() {
				document.body && document.body.append(this.$el)
			},
			_removeFromBody() {
				if(this.$el && this.$el.parentNode) {
					this.$el.parentNode.removeChild(this.$el)
				}
			}
		},
		destroyed() {
			this._removeFromBody()
		}
	}
</script>

<style src="../style.styl" lang="stylus" />