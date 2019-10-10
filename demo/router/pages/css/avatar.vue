<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/avatar.vue" slot="more">源码</a>

		<demo title="avatar">
			<img :src="src" avatar />
			<span avatar text="28">A</span>
			<span avatar>国</span>
			<span avatar>avatar</span>
			<img :src="src" avatar radius="50" />
		</demo>
		
		<demo title="尺寸">
			<span color="bgmain white" avatar="s">s</span>
			<span color="bgmain white" avatar>默认</span>
			<span color="bgmain white" avatar="m">m</span>
			<span color="bgmain white" avatar="l">l</span>
		</demo>
		
		<demo title="头像组 group">
			<div avatar="group">
			  <b color="bgmain white" avatar>老</b>
			  <b color="bgmain white" avatar>地</b>
			  <b color="bgmain white" avatar>方</b>
			</div>
		</demo>
		
		<demo title="头像组反向 reverse [radius]">
			<div avatar="group reverse">
			  <b color="bgmain white" radius="100" avatar="s">老</b>
			  <b color="bgmain white" radius="100" avatar="s">地</b>
			  <b color="bgmain white" radius="100" avatar="s">方</b>
			</div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'avatar|头像',
		
		data() {
		  return {
		    src: 'http://thirdwx.qlogo.cn/mmopen/vi_32/82ypiarh4VEHapO9g7619xiao4KBfEAe6oVXWKkXYTbvdY5tOLQX0cNHVaBO6g9TJNFrYWDvGwgvPicBZTp615mjA/132'
		  }
		}
	}
</script>

<style lang="stylus" scoped>
	span
		margin 0 .25em
</style>
