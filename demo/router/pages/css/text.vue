<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/text.vue"
			slot="more">源码</a>

		<demo title="text 12 14 16为基数的黄金分割算法">
			<div row="wrap aife">
				<span border gap="m5 p5" :text="d" v-for="d in data.split(' ')" :title="`text=${d}`">{{d}}</span>
			</div>
		</demo>

		<demo>
			<div v-for="d in data.split(' ')" gap="mt10" row="aic" color="bgbg">
				<span tag="fit" gap="mr10">{{d}}</span> <span :text="d"><i class="ico-info"></i>OUI前端库</span>
			</div>
		</demo>

		<demo title="最大字号">
			<span tag="fit" gap="mr10">50</span> <span text="50"><i class="ico-alert"></i></span>
			<span tag="fit" gap="mr10">60</span> <span text="60"><i class="ico-alert"></i></span>
			<span tag="fit" gap="mr10">68</span> <span text="68"><i class="ico-alert"></i></span>
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
				data: 'sm 12 20 32 14 22 36 16 26 42',
				odata: 'b i tl tc tr tj vm capitalize upper lower',
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