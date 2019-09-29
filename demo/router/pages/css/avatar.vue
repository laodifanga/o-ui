<template>
	<block>
		<demo title="avatar">
			<img :src="src" avatar />
			<span avatar>A</span>
			<span avatar>国</span>
			<span avatar>avatar</span>
			<img :src="src" avatar radius="50" />
		</demo>
		
		<demo title="尺寸">
			<span avatar="s">s</span>
			<span avatar="m">m</span>
			<span avatar="l">l</span>
		</demo>
		
		<demo title="尺寸 [text]">
			<span avatar="s"><b text="24">24</b></span>
			<span avatar><b text="28">28</b></span>
			<span avatar="m"><b text="40">40</b></span>
			<span avatar="l"><b text="56">56</b></span>
		</demo>
		
		<demo title="头像组 group">
			<div avatar="group">
			  <b avatar>老</b>
			  <b avatar>地</b>
			  <b avatar>方</b>
			</div>
		</demo>
		
		<demo title="头像组反向 reverse [radius]">
			<div avatar="group reverse">
			  <b radius="100" avatar>老</b>
			  <b radius="100" avatar>地</b>
			  <b radius="100" avatar>方</b>
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
