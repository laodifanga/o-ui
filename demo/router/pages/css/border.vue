<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/border.vue" slot="more">源码</a>

		<Demo title="边框风格" color="main">
		  <div border="c" gap="p12 m4">border</div>
		  <div border="dashed c" gap="p12 m4">border = dashed</div>
		  <div border="dotted c" gap="p12 m4">border = dotted</div>
		</Demo>
		
		<Demo title="边框">
		  <div row="wrap">
		    <div col="1" text="nowrap" :color="`bgwhite ${~b.indexOf('c') ? (Math.random() > .5 ? 'main' : 'fail') : ''}`" gap="p24 m12" v-for="b in borders" :border="b">border="{{b}}"</div>
		  </div>
		</Demo>
	</block>
</template>

<script>
	export default {
		__name: 'border | 边框',
		
		data() {
		  return {
		    borders: [
		      '', 't', 'r', 'b', 'l', 'c', 'c t', 'c r', 'c b', 'c l'
		    ]
		  }
		}
	}
</script>

<style>
</style>
