<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/components/swiper.vue"
			slot="more">源码</a>

		<demo title="默认">
			<o-swiper>
				<o-swiper-item v-for="d in 5" :key="d">
					<div gap="p50" text="tc" :color="`${d % 2 ? 'bgmain' : 'bgblack'} white`" style="height: 100%;">
						默认{{d}}
					</div>
				</o-swiper-item>
			</o-swiper>
		</demo>

		<demo>
			<div style="height: 150px;">
				<o-swiper ref="swiper" @change="change" @animated="animated" @animating="animating" :duration="380">
					<o-swiper-item v-for="d in 5" :key="d">
						<div gap="p30" text="tc" :color="`${d % 2 ? 'bgred' : 'bgyellow'} white`" style="height: 100%;">
							默认{{d}}
						</div>
					</o-swiper-item>
				</o-swiper>
			</div>
			<span btn @click="$refs.swiper.moveTo(current)">到第{{current + 1}}</span>

			<span btn @click="$refs.swiper.prev()">上一页</span>
			<span btn @click="$refs.swiper.next()">下一页</span>

			{{animate ? '动画中':'动画结束'}} - {{index}}
		</demo>

		<demo>
			<div style="height: 150px;">
				<o-swiper :dots="true" :auto-play="4000">
					<o-swiper-item v-for="d in 5" :key="d">
						<div gap="p30" text="tc" :color="`${d % 2 ? 'bgred' : 'bgyellow'} white`" style="height: 100%;">
							默认{{d}}
						</div>
					</o-swiper-item>
				</o-swiper>
			</div>
		</demo>

		<demo title="循环滚动">
			<o-swiper :loop="true">
				<o-swiper-item v-for="d in 5" :key="d">
					<div gap="p50" text="tc" :color="`${d % 2 ? 'bgmain' : 'bgblack'} white`" style="height: 100%;">
						默认{{d}}
					</div>
				</o-swiper-item>
			</o-swiper>
		</demo>



		<demo title="宽度80% 不自动居中">
			<div style="height: 150px;">
				<o-swiper item-width="80%" :auto-center="false">
					<o-swiper-item v-for="d in 5" :key="d">
						<div :color="`${d % 2 ? 'bgmain' : 'bgblack'} white`" style="height: 100%;">
							默认{{d}}
						</div>
					</o-swiper-item>
				</o-swiper>
			</div>
		</demo>

		<demo title="宽度60% 自动居中 展示第二个 5秒后到第三个">
			<div style="height: 150px;">
				<o-swiper item-width="60%" :current="current">
					<o-swiper-item v-for="d in 5" :key="d">
						<div :color="`${d % 2 ? 'bgmain' : 'bgblack'} white`" style="height: 100%;">
							默认{{d}}
						</div>
					</o-swiper-item>
				</o-swiper>
			</div>
		</demo>

		<demo title="高度自适应">
			<o-swiper :auto-height="true">
				<o-swiper-item>
					<div gap="p30" color="bgmain white">1</div>
				</o-swiper-item>
				<o-swiper-item>
					<div color="bgblack white">
						<div gap="p30" v-for="d in 5">1</div>
					</div>
				</o-swiper-item>
				<o-swiper-item>
					<div gap="p30" color="bgmain white">2</div>
				</o-swiper-item>
			</o-swiper>
		</demo>

		<demo title="垂直滑动">
			<div style="height: 300px;">
				<o-swiper :vertical="true" :dots="true">
					<o-swiper-item v-for="d in 5" :key="d">
						<div gap="p40" text="tc" :color="`${d % 2 ? 'bgred' : 'bgyellow'} white`" style="height: 100%;">
							垂直滑动{{d}}
						</div>
					</o-swiper-item>
				</o-swiper>
			</div>
		</demo>

		<demo title="结合tab">
			<div tab>
				<div :color="i == currentTab ? 'main' : ''" :tab-item="i == currentTab ? 'act' : ''" v-for="d,i in 5" @click="tapTab(d, i)">tab{{d}}</div>
			</div>
			<o-swiper ref="tab" @change="changetab">
				<o-swiper-item v-for="d in 5" :key="d">
					<div gap="p50" text="tc" :color="`${d % 2 ? 'bgred' : 'bgblack'} white`" style="height: 100%;">
						默认{{d}}
					</div>
				</o-swiper-item>
			</o-swiper>
		</demo>

	</block>
</template>

<script>
	import { swiper, swiperItem } from 'src'
	export default {
		__name: 'swiper | 轮播图 | 1',

		components: {
			[swiper.name]: swiper,
			[swiperItem.name]: swiperItem,
		},

		data() {
			return {
				current: 1,
				index: 0,
				animate: false,

				currentTab: 0
			}
		},

		methods: {
			change(n, o) {
				this.index = n
			},

			animated(e) {
				this.animate = false
			},

			animating() {
				this.animate = true
			},

			changetab(e) {
				this.currentTab = e
			},

			tapTab(d, i) {
				this.currentTab = i
				this.$refs.tab.moveTo(i)
			}
		},

		mounted() {
			setTimeout(() => {
				this.current = 2
			}, 5000)
		}
	}
</script>

<style>
</style>