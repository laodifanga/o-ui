<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/text.vue" slot="more">源码</a>
		
		<demo title="text">
			<div row="wrap aife">
				<span border gap="m4" :text="d" v-for="d in data.split(' ')" :title="`text=${d}`">{{d}}</span>
			</div>
		</demo>

		<demo v-for="d in odata.split(' ')" :title="`text=${d}`">
			<div :text="d">hello world!<span v-if="d == 'vm'" btn="l">查看</span></div>
		</demo>

		<demo v-for="d in tdata.split(' ')" :title="`text=${d}`">
			<div>
				<div class="test" :text="d">大雨哗哗飘过墙，诸葛无计找张良，关公跑了赤兔马</div>
			</div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'text | 文本',

		data() {
			return {
				data: '12 13 14 16 20 24 28 32 36 40 48 56 64 72',
				odata: 'sm b i tl tc tr tj vm c u l',
				tdata: 'ell ell2 x y auto wrap nowrap',
			}
		}
	}
</script>

<style scoped>
	.test {
		border: 1px solid silver;
		width: 8em;
		height: 64px;
	}
</style>
