<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/ico.vue" slot="more">源码</a>
		
		<demo :title="`共${data.split(' ').length}个图标`">
			<div row="wrap jcsb">
				<div v-for="d in data.split(' ')" :key="d" size="w33" text="tc">
					<div gap="pt10 pb10">
						<span color="main" :class="`ico-${d}`" text="42"></span>
						<div color="desc" gap="mt10">ico-{{d}}</div>
					</div>
				</div>
			</div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'ico | 字体图标',

		data() {
			return {
				data: 'alert right right-xx right-x top top-x top-xx attach check check-circle close clock upload close-circle code edit download eye eye-off add grid info image link loader list minus more-horizontal minus-circle more-vertical location plus power question-circle refresh search share plus-circle settings slash del swap'
			}
		},
	}
</script>

<style>
</style>
