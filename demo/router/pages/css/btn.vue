<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/btn.vue" slot="more">源码</a>

		<Demo title="按钮类型">
		  <span gap="m4" btn>默认</span>
		  <span gap="m4" btn color="bgmain white">color="bgmain white"</span>
		  <span gap="m4" btn="fit">fit</span>
		  <span gap="m4" btn="plat">plat</span>
		  <span gap="m4" btn="plat" radius="8">radius</span>
		  <span gap="m4" btn="plat ico" radius="100">ico</span>
		  <span gap="m4" btn="text">text</span>
		  <span gap="mt4" btn="block">block</span>
		  <span gap="mt4" btn="block l">立即订购</span>
		</Demo>
		
		<Demo title="按钮尺寸 s m l">
			<span gap="m4" btn="fit s">s</span>
			<span gap="m4" btn="fit m">m</span>
			<span gap="m4" btn="fit">默认</span>
			<span gap="m4" btn="fit l">l</span>
		</Demo>
		
		<Demo title="图标 ico">
		  <span gap="m4" btn="ico s">ico</span>
		  <span gap="m4" btn="ico plat m">ico</span>
		  <span gap="m4" btn="ico">ico</span>
		  <span gap="m4" btn="ico plat l" radius="100">ico</span>

		  <span gap="m4" radius="100" btn="plat s ico">
		    <img :src="src" />
		  </span>
		
		  <span gap="m4" radius="100" btn="plat m ico">
		    <img :src="src" />
		  </span>
		
		  <span gap="m4" radius="8" btn="ico">
		    <img :src="src" />
		  </span>
		
		  <span gap="m4" radius="100" btn="plat l ico">
		    <img :src="src" />
		  </span>
		</Demo>
		
		
		<Demo title="分组 group">
		
		  <div btn="group" gap="mt8">
		    <button btn>分组</button>
		    <button btn>分组</button>
		    <button btn>分组</button>
		    <button btn>分组</button>
		  </div>
		
		  <div btn="group" gap="mt8">
		    <button btn="plat" color="oui">分组</button>
		    <button btn="plat" color="oui">分组</button>
		    <button btn="plat" color="oui">分组</button>
		    <button btn="plat" color="oui">分组</button>
		  </div>
		
		  <div btn="group border" gap="mt8">
		    <button btn radius="100" color="bgmain white">分组</button>
		    <button btn radius="100" color="bgmain white">分组</button>
		    <button btn radius="100" color="bgmain white">分组</button>
		    <button btn radius="100" color="bgmain white">分组</button>
		  </div>
		</Demo>

		<Demo title="结合color">
			<span v-for="c in color.split(' ')" gap="m4" btn="fit" :color="`bg${c} ${c} +`">{{c}}</span>
 			<span v-for="c in color.split(' ')" gap="m4" btn="fit plat" radius :color="`${c}`">{{c}}</span>
 			<span v-for="c in color.split(' ')" gap="m4" btn="fit plat" radius="100" :color="`bg+ bg${c} ${c}`">{{c}}</span>
		</Demo>
	</block>
</template>

<script>
	export default {
		__name: 'btn | 按钮',
		
		data() {
		  return {
				src: 'http://thirdwx.qlogo.cn/mmopen/vi_32/82ypiarh4VEHapO9g7619xiao4KBfEAe6oVXWKkXYTbvdY5tOLQX0cNHVaBO6g9TJNFrYWDvGwgvPicBZTp615mjA/132',
				
				color: 'main info success warning fail black title cont desc disabled border',
		  }
		}
	}
</script>

<style>
</style>
