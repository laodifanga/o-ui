<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/components/pager.vue" slot="more">源码</a>

		<demo>
			<span btn="fit" color="bgmain white" @click="reset">重置</span>
			<div class="pagerout">
				<o-pager @next="onNext" :data="data" ref="pager">
					<div gap="p12" v-for="d in data">
						<span tag="dot" :style="{background: '#' + Math.random().toString(16).substr(2, 6) }"></span>
						数据{{d > 9 ? d : '0' + d}} 
					</div>
				</o-pager>
			</div>
		</demo>

		<demo title="自定义">
			<div class="pagerout">
				<o-pager @next="onNext" :data="data" ref="pager2">
					<div gap="p12" v-for="d in data">
						<span tag="dot" :style="{background: '#' + Math.random().toString(16).substr(2, 6) }"></span>
							数据{{d > 9 ? d : '0' + d}} 
					</div>


					<div slot="done" gap="p16" color="desc">
						个心，某了，白刀子了
					</div>

					<div slot="loading" slot-scope="data" gap="p16" border>
						<span v-if="data.busy">白忙航，等会带... <span loading="s"></span> </span>
						<span v-else>你再使劲王上拽拽喊</span>
					</div>
				</o-pager>
			</div>
		</demo>

		<demo title="指令方式">
			<div class="pagerout" v-pager="vPager" :busy="busy">
				<div gap="p12" v-for="d in data">
					<span tag="dot" :style="{background: '#' + Math.random().toString(16).substr(2, 6) }"></span>
						数据{{d > 9 ? d : '0' + d}} 
				</div>

				
				<div v-if="data > 30" gap="p16" text="tc">数据已经全部加载</div>
				<div v-else>
					<div v-if="busy" text="tc"> <span loading="flip s" color="main"></span> 数据加载中</div>
					<div v-else text="tc">上拉加载更多</div>
				</div>
			</div>
		</demo>
	</block>
</template>

<script>
	import {directive_pager} from 'src/directive/index'

	export default {
		__name: 'pager | 滚动容器',

		directives: {
			pager: directive_pager
		},

		data() {
			return {
				data: 10,
				busy: false
			}
		},

		methods: {
			async onNext(done) {
				if(this.data > 30) return done(true)
				await this.getData()
			},

			getData() {
				return new Promise(resolve => {
					setTimeout(() => {
						this.data += 10
						resolve()
					}, 2000)
				})
			},

			reset() {
				this.data = 10
				this.$refs.pager.reset()
				this.$refs.pager2.reset()
			},

			vPager() {
				if(this.data > 30) return
				this.busy = true
				setTimeout(() => {
					this.data += 10
					this.busy = false
				}, 2000)
			}
		}
	}
</script>

<style>
	.pagerout {
		height: 40vh;
		overflow: auto;
	}
</style>
