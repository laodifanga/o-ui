<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/form/rule.vue"
			slot="more">源码</a>

		<demo title="内置规则 reqiured pattern between">
			<o-form-rule :value="test" @change="onChange0">
				<input type="text" v-model="test0"> 无验证规则
			</o-form-rule>
			<div tag gap="mb10">{{re0}}</div>


			<div row="aic">
				<o-form-rule col="1" :value="test"
					:rule="[{name: 'required', msg: '这个必须填哦'},{name: 'pattern', val: /^1\d+$/, msg: '1开头2位数以上'}, {name: 'between', val: '11-50', msg: '11-50'}]"
					ref="rule" @change="onChange">
					<input type="text" v-model="test">
				</o-form-rule>
				<span btn="main" @click="$refs.rule.check()">验证</span>
			</div>

			<div gap="mt10 p10" color="bgmain main bg+">
				{{re}}
			</div>
		</demo>

		<demo title="自定义规则 tel">
			<div row="aic">
				<o-form-rule col="1" :value="test2"
					:rule="[{name: 'required', msg: '这个必须填哦'}, {name: 'tel', msg: '自定义规则tel错误'}]"
					:custom-rule="customRule" 
					ref="rule2" @change="onChange2">
					<input type="text" v-model="test2">
				</o-form-rule>
				<span btn="main" @click="$refs.rule2.check()">验证</span>
			</div>

			<div gap="mt10 p10" color="bgmain main bg+">
				{{re2}}
			</div>
		</demo>
	</block>
</template>

<script>
	import { formRule } from 'src'
	export default {
		__name: 'rule | 验证规则',

		components: {
			[formRule.name]: formRule
		},

		data() {
			return {
				re0: '',
				re: '',
				re2: '',
				test0: '',
				test: '',
				test2: '1399999999',

				customRule: {
					tel(val, rule) {
						let reg = /^1\d{10}$/
						return reg.test(val)
					}
				}
			}
		},

		methods: {
			onChange0(e) {
				this.re0 = e
			},
			onChange(e) {
				this.re = e
			},
			onChange2(e) {
				this.re2 = e
			}
		}
	}
</script>

<style>
</style>