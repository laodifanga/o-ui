<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/components/pager.vue" slot="more">源码</a>

		<demo>
			<span btn="fit" color="bgmain white" @click="reset">重置</span>
			<div class="pagerout">
				<o-pager @next="onNext" :data="data" ref="pager">
					<div gap="p12" v-for="d in data">数据{{d > 9 ? d : '0' + d}}: 
					<span tag radius color="white" :style="{background: '#' + Math.random().toString(16).substr(2, 6) }">#{{Math.random().toString(16).substr(2, 6)}}</span></div>
				</o-pager>
			</div>
		</demo>

		<demo title="关闭自动加载">
			<div class="pagerout">
				<o-pager @next="onNext" :autoLoad="false" :data="data">
					<div gap="p12" v-for="d in data">数据{{d > 9 ? d : '0' + d}}: 
					<span tag radius color="white" :style="{background: '#' + Math.random().toString(16).substr(2, 6) }">#{{Math.random().toString(16).substr(2, 6)}}</span></div>
				</o-pager>
			</div>
		</demo>

		<demo title="指令方式">
			<div class="pagerout" v-pager="vPager" :busy="busy">
				<div gap="p12" v-for="d in data">
					数据{{d > 9 ? d : '0' + d}}: 
					<span tag radius color="white" :style="{background: '#' + Math.random().toString(16).substr(2, 6) }">#{{Math.random().toString(16).substr(2, 6)}}</span>
				</div>

				<div v-show="busy" text="tc"> <span loading="flip m" color="main"></span> 数据加载中</div>
				<div v-if="data >= 50" gap="p16" text="tc">数据已经全部加载</div>
			</div>
		</demo>
	</block>
</template>

<script>
	import {directive_pager} from 'src/directive/index'

	console.log(directive_pager)
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
				if(this.data >= 50) return done(true)
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
				this.data = 20
				this.$refs.pager.reset()
			},

			vPager() {
				if(this.data >= 50) return
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
