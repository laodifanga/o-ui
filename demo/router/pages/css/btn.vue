<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/btn.vue" slot="more">源码</a>

		<Demo title="按钮类型">
		  <span gap="m5" btn>默认</span>
		  <span gap="m5" btn>图标<i class="ico-alert"></i></span>
		  <span gap="m5" btn color="bgmain white">color="bgmain white"</span>
		  <span gap="m5" btn="fit">fit</span>
		  <span gap="m5" btn="plat">plat</span>
		  <span gap="m5" btn="plat" radius="8">radius</span>
		  <span gap="m5" btn="plat ico" radius="100"><i class="ico-del"></i></span>
		  <span gap="m5" btn="text">text</span>
		  <span gap="mt5" btn="block">block</span>
		  <span gap="mt5" btn="block l">立即订购</span>
		</Demo>

		<Demo>
			<span gap="m5" btn="main">主色</span>
			<span gap="m5" btn="success">成功</span>
			<span gap="m5" btn="fail">失败</span>
			<span gap="m5" btn="warning">警告</span>
			<span gap="m5" btn="info">信息</span>
		</Demo>
		
		<Demo title="按钮尺寸 s m l">
			<span gap="m5" btn="fit s">s</span>
			<span gap="m5" btn="fit m">m 默认</span>
			<span gap="m5" btn="fit l">l</span>
		</Demo>
		
		<Demo title="图标 ico">
		  <span gap="m5" btn="ico s"><i class="ico-add"></i></span>
		  <span gap="m5" btn="ico"><i class="ico-del"></i></span>
		  <span gap="m5" btn="ico"><i class="ico-edit"></i></span>
		  <span gap="m5" btn="ico plat l" radius="100" text="26"><i class="ico-del"></i></span>

		  <span gap="m5" radius="100" btn="plat s ico">
		    <img :src="src" />
		  </span>
		
		  <span gap="m5" radius="100" btn="plat m ico">
		    <img :src="src" />
		  </span>
		
		  <span gap="m5" radius="100" btn="plat l ico">
		    <img :src="src" />
		  </span>
		</Demo>
		
		
		<Demo title="分组 group">
		
		  <div btn="group" gap="m5">
		    <button btn>分组</button>
		    <button btn>分组</button>
		    <button btn>分组</button>
		    <button btn>分组</button>
		  </div>
		
		  <div btn="group" gap="m5">
		    <button btn="plat" color="oui">分组</button>
		    <button btn="plat" color="oui">分组</button>
		    <button btn="plat" color="oui">分组</button>
		    <button btn="plat" color="oui">分组</button>
		  </div>
		
		  <div btn="group border" gap="m5">
		    <button btn radius="100" color="bgmain white">分组</button>
		    <button btn radius="100" color="bgmain white">分组</button>
		    <button btn radius="100" color="bgmain white">分组</button>
		    <button btn radius="100" color="bgmain white">分组</button>
		  </div>
		</Demo>

		<Demo title="结合color">
			<span v-for="c in color.split(',')" gap="m10" btn="fit" :color="`bg${c} ${c} +`">按钮</span>
 			<span v-for="c in color.split(',')" gap="m10" btn="fit plat" radius :color="`${c}`">btn</span>
 			<span v-for="c in color.split(',')" gap="m10" btn="fit plat" radius="100" :color="`bg+ bg${c} ${c}`">BTN</span>
		</Demo>
	</block>
</template>

<script>
	export default {
		__name: 'btn | 按钮',
		
		data() {
		  return {
				src: 'http://thirdwx.qlogo.cn/mmopen/vi_32/82ypiarh4VEHapO9g7619xiao4KBfEAe6oVXWKkXYTbvdY5tOLQX0cNHVaBO6g9TJNFrYWDvGwgvPicBZTp615mjA/0',
				
				color: 'main,info,success,warning,fail,black,title,sub,cont,desc,disabled,placeholder,border,line,bg,white',
		  }
		}
	}
</script>

<style>
</style>
