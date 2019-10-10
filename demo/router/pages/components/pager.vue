<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/components/pager.vue" slot="more">源码</a>

		<demo>
			<o-pager @next="onNext" :data="data">
				<div gap="p16" v-for="d in data" border="b">数据{{d}}</div>
			</o-pager>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'pager | 滚动容器',

		data() {
			return {
				data: 20
			}
		},

		methods: {
			async onNext(done) {
				if(this.data >= 30) return done(true)
				await this.getData()
			},

			getData() {
				return new Promise(resolve => {
					setTimeout(() => {
						this.data += 10
						resolve()
					}, 1000)
				})
			}
		}
	}
</script>

<style>
</style>
