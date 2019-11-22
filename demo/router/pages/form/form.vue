<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/form/form.vue"
			slot="more">源码</a>

		<demo>
			<o-form ref="form">
				<o-form-item label="name" :value="form.name">
					<input type="text" v-model="form.name" placeholder="name">
				</o-form-item>

				<o-form-item label="名字" :value="form.name" required>
					<input type="text" v-model="form.name" placeholder="name">
				</o-form-item>
				<o-form-item label="年龄" :value="form.age" between="10-35" msg="年龄10-35">
					<input type="text" v-model="form.age" placeholder="age">
				</o-form-item>
				<o-form-item label="电话号码" :value="form.tel" tel :custom="customRule" msg="电话格式不对">
					<input type="text" v-model="form.tel" placeholder="自定义验证电话规则">
				</o-form-item>

				<o-form-item>
					<span btn @click="submit">提交</span>
					<span btn @click="reset">重置</span>
				</o-form-item>
			</o-form>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'form | 表单',

		data() {
			return {
				form: {
					name: '',
					age: '',
					tel: ''
				},

				customRule: {
					tel(val, rule) {
						let reg = /^1\d{10}$/
						return reg.test(val)
					}
				}
			}
		},

		methods: {
			submit() {
				console.log(this.$refs.form.check())
			},
			reset() {
				this.$refs.form.reset()
			}
		}
	}
</script>

<style>
</style>