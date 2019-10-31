<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/icon.vue" slot="more">源码</a>
		
		<demo :title="`共${data.split(' ').length}个图标`">
			<div row="wrap jcsb">
				<div v-for="d in data.split(' ')" :key="d" size="w33" text="tc">
					<div gap="pt8 pb8">
						<span color="main" :class="`icon-${d}`" text="28"></span>
						<div color="desc" gap="mt8">icon-{{d}}</div>
					</div>
				</div>
			</div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'icon | 字体图标',

		data() {
			return {
				data: 'alert arrow-right arrow-up check check-circle chevron-right chevron-up edit add grid help info loader menu minus disabled plus search settings share del upload x x-circle'
			}
		},
	}
</script>

<style>
</style>
