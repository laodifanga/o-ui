<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/tip.vue" slot="more">源码</a>

		<demo>
			<div gap="p20" text="tc">
				<span btn="plat fit" color="main" gap="m15" v-for="d in data" :place="d.place" :tip="d.tip" open>{{d.tip}}</span>
			</div>
		</demo>
		
		<demo>
			<div gap="p20" text="tc">
				<span btn="plat fit" color="main" gap="m15" v-for="d in data" :place="d.place" :tip="d.tip">{{d.tip}}</span>
			</div>
		</demo>

	</block>
</template>

<script>
	export default {
		__name: 'tip | 气泡',

		data() {
			return {
				data: [
					{place: 'tl', tip: '上左'},
					{place: 't', tip: '上'},
					{place: 'tr', tip: '上右'},
					{place: 'bl', tip: '下左'},
					{place: 'b', tip: '下'},
					{place: 'br', tip: '下右'},
					{place: 'cl', tip: '中左'},
					{place: 'cr', tip: '中右'},
				]
			}
		}
	}
</script>

<style>
</style>
