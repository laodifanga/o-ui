<template>
	<div class="o-form-rule">
		<slot></slot>
	</div>
</template>

<script>
	let _rules = { // 内置三种规则 [{name: 'required', msg: '', val: ''}]
		required(val, rule) {
			if (val instanceof Array || val) return true
		},
		pattern(val, rule) {
			if (typeof rule !== 'object' || rule.test(val)) return true
		},
		between(val, rule) {
			let rules = rule.split('-')
			if (rules.length != 2) return true
			if (Number(val) >= rules[0] && Number(val) <= rules[1]) return true
		}
	}

	import { version, prefix } from '../../../../package.json'
	export default {
		name: `${prefix}FormRule`,

		props: {
			value: '', // 待验证数据
			customRule: '', // 自定义验证规则
			rule: '',
		},

		data() {
			return {
				dirty: false,
				valid: true, // 1 不验证 true 验证通过 false 验证失败
				error: '', // 错误信息
			}
		},

		watch: {
			value(n, o) {
				if (!this.dirty) {
					this.dirty = true
				}
				this.check()
			}
		},

		created() {
			this.__rules = Object.assign(_rules, typeof this.customRule !== 'object' ? {} : this.customRule)

			this._check = (rule, index) => {
				let { name, msg, val } = rule

				this.error = ''
				if (!this.__rules[name]) return true

				if (!this.__rules[name](this.value, val)) {
					msg = msg || `${name} ${val || ''}`
					this.error = { name, msg, val }
					return false
				}
				return true
			}

			this._emit(this)
		},

		methods: {
			check() {
				if (!this.rule || !this.rule.length) return
				this.dirty = true
				this.valid = this.rule.every(this._check)
				this._emit(this)
			},
			reset() {
				Object.assign(this.$data, this.$options.data())
				this._emit(this)
			},
			_emit({ dirty, valid, error }) {
				this.$emit('change', { dirty, valid, error })
			}
		}
	}
</script>

<style src="../style.styl" lang="stylus" />