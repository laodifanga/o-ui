<template>
	<div class="o-form-item" @click="active = true" :class="classes">
		<div class="o-form-item__label">
			<transition name="o-move-bottom" mode="out-in">
				<div class="error" v-if="ruleInfo && ruleInfo.error && ruleInfo.error.msg" key="error">{{ruleInfo.error.msg}}</div>
				<div class="label" v-else key="label">
					{{label}}
				</div>
			</transition>
		</div>
		<form-rule class="o-form-item__cont" :value="value" :rule="rule" ref="rule" :custom-rule="custom"
			@change="onRuleChange">
			<slot></slot>
		</form-rule>
	</div>
</template>

<script>
	import { version, prefix } from '../../../../package.json'
	import mixins from '../../../utils/childs_mixins'
	import formRule from '../../form-rule/src/main.vue'
	export default {
		name: `${prefix}FormItem`,

		props: {
			label: '',
			value: '', // 待验证数据
			msg: '', //错误提示信息
			custom: '', // 自定义验证规则
		},

		mixins: [mixins],

		components: { formRule },

		computed: {
			rule() {
				let rule = []
				for (let name in this.$attrs) {
					let val = this.$attrs[name]
					if ('pattern' === name) {
						val = new RegExp(val)
					}
					rule.push({ name, val, msg: this.msg })
				}
				return rule
			},
			classes() {
				if (!this.ruleInfo) return
				let { dirty, valid, error } = this.ruleInfo
				return {
					[`${prefix.toLowerCase()}-form-item--act`]: this.active && undefined !== this.value,
					[`${prefix.toLowerCase()}-form-item--error`]: dirty && !valid,
					[`${prefix.toLowerCase()}-form-item--success`]: dirty && valid
				}
			}
		},

		data() {
			return {
				ruleInfo: '',
				active: false
			}
		},

		created() {
			this._checkEvent = (e) => {
				if (this.$el.contains(e.target)) return
				this.active = false
			}
			document.addEventListener('click', this._checkEvent, false)
		},

		beforeDestroy() {
			document.removeEventListener('click', this._checkEvent)
		},

		methods: {
			onRuleChange(e) {
				this.ruleInfo = e
			},
			check() {
				this.$refs.rule.check()
			},
			getValid() {
				return this.$refs.rule.valid
			},
			reset() {
				this.$refs.rule.reset()
			}
		},
	}
</script>

<style src="../style.styl" lang="stylus" />