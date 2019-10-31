<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/size.vue"
			slot="more">源码</a>

		<demo title="size=w?">
			<div row="wrap">
				<div v-for="d,i in data.split(' ')" :color="i%2 ? 'bgmain white' : 'bgfail white'" :size="`w${d}`">
					<div gap="p16">w{{d}}</div>
				</div>
			</div>
		</demo>

		<demo title="size=h?">
			<div style="height: 200px;">
				<div v-for="d,i in data.split(' ')" :color="i%2 ? 'bgmain white' : 'bgfail white'" :size="`h${d}`">
					<div gap="p16">h{{d}}</div>
				</div>
			</div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'size | 尺寸',

		data() {
			return {
				data: '100 50 33 30 25'
			}
		}
	}
</script>

<style>
</style>