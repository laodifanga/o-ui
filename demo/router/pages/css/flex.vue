<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/flex.vue" slot="more">源码</a>
		
		<demo v-for="d in data" :title="`row=${d}`">
			<div :row="d">
				<div gap="p10" :color="`white ${n % 2 ? 'bgmain' : 'bgfail'}`" v-for="n in 6">{{n}}</div>
			</div>
		</demo>

		<demo v-for="d in adata" :title="`row=${d}`">
			<div :row="d">
				<div gap="p10" :style="`height: ${n % 2 ? '50' : ''}px`" :color="`white ${n % 2 ? 'bgmain' : 'bgfail'}`" v-for="n in 6">{{n}}</div>
			</div>
		</demo>

		<demo v-for="d in jdata" :title="`row=${d}`">
			<div :row="d">
				<div gap="p10" :color="`white ${n % 2 ? 'bgmain' : 'bgfail'}`" v-for="n in 6">{{n}}</div>
			</div>
		</demo>

		<demo title="row=wrap">
			<div row="wrap">
        <div gap="p10" :color="`white ${n % 2 ? 'bgmain' : 'bgfail'}`" v-for="n in 16">{{n}}</div>
      </div>
		</demo>

		<demo title="col=x">
			<div row>
        <div gap="p10" :col="n" :color="`white ${n % 2 ? 'bgmain' : 'bgfail'}`" v-for="n in 6">{{n}}</div>
      </div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'row && col | flex布局',

		data() {
			return {
				data: ['', 'row-reverse'],
				adata: ['aifs', 'aic', 'aife'],
				jdata: ['jcfs', 'jcsb', 'jcsa', 'jcc', 'jcfe'],
			}
		}
	}
</script>

<style>
</style>
