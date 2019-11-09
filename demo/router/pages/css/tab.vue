<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/tab.vue"
			slot="more">源码</a>

		<demo>
			<div tab>
				<div :tab-item="i==0 ? 'act' : ''" v-for="d,i in data" :key="i">{{d}}</div>
			</div>

			<div tab color="fail" text="16">
				<div :tab-item="i==1 ? 'act' : ''" v-for="d,i in data" :key="i" v-if="i < 4">{{d}}</div>
			</div>

			<div tab text="26" color="cont">
				<div :tab-item="i==2 ? 'act' : ''" :color="i==2 ? 'success' : ''" v-for="d,i in data" :key="i" v-if="i < 4">{{d}}</div>
			</div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'tab | tab',

		data() {
			return {
				data: [
					'国际大牌', '女装', '男装', '内衣', '母婴', '手机', '数码', '户外', '居家百货',
				]
			}
		},
	}
</script>

<style>
</style>