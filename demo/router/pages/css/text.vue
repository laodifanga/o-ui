<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/text.vue"
			slot="more">源码</a>

		<demo gap="p10" title="综合示例">
			<div gap="p10" shadow radius="6">
				<div row="aic">
					<div col="1">
						<div text="22">预计返现</div>
						<div text="12" color="gray" gap="mt10">加油越多 返现越多 最高可返60元</div>
					</div>
					<div color="red">
						<small text="22" gap="mr5">¥</small>
						<span text="36">24</span>
					</div>
				</div>

				<div row="aic" gap="mt20">
					<div col="1">
						<div text="16">
							<i class="ico-image" gap="mr5"></i>
							已持指定加油卡¥199.98
						</div>
						<div text="12" color="gray" gap="mt15">
							<span gap="p5 pl15 pr15 mr10" border="c" color="orange" radius="100">附近指定加油站</span>
							<span gap="p5 pl15 pr15" border="c" color="orange" radius="100">充油卡</span>
						</div>
					</div>
					<div>
						<span text="14" gap="p5 pl10 pr10" radius="6" color="bggreen10 green">已完成</span>
					</div>
				</div>

				<div row="aic" gap="mt20">
					<div col="1">
						<div text="16">
							<i class="ico-alert" gap="mr5"></i>
							完成1笔快捷支付<span text="14" color="gray10">(任意金额)</span>
						</div>
						<div text="14" color="gray10" gap="mt10">
							不含 指定加油站加油/充油卡消费
						</div>
					</div>
					<div>
						<span text="14" gap="p5 pl10 pr10" radius="6" color="bgorange10 orange">待完成</span>
					</div>
				</div>
			</div>
			<div gap="mt20" text="sm" color="silver">* 加油/消费入账统计存在1-2日数据延迟</div>
		</demo>

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