<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/avatar.vue" slot="more">源码</a>

		<demo title="avatar">
			<img :src="src" avatar />
			<span avatar text="28">A</span>
			<span avatar>国</span>
			<span avatar>a</span>
			<img :src="src" avatar radius="50" />
		</demo>
		
		<demo title="尺寸 s m l">
			<span color="bgmain white" :avatar="d" radius="100" v-for="d in data">{{d}}</span>
			<img gap="mr4" :src="src" :avatar="d" radius="50" v-for="d in data" />
		</demo>
		
		<demo title="头像组 group">
			<div avatar="group" v-for="d in data">
				<span color="bgmain white" radius="100" :avatar="d">{{d}}</span>
				<span color="bgmain white" radius="100" :avatar="d">{{d}}</span>
				<span color="bgmain white" radius="100" :avatar="d">{{d}}</span>
			</div>
		</demo>
		
		<demo title="头像组反向 reverse [radius]">
			<div avatar="group reverse" v-for="d in data">
			  <span color="bgmain white" radius="100" :avatar="d" text="12">{{d}}</span>
			  <span color="bgmain white" radius="100" :avatar="d" text="12">{{d}}</span>
			  <span color="bgmain white" radius="100" :avatar="d" text="12">{{d}}</span>
			</div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'avatar|头像',
		
		data() {
		  return {
				src: 'http://thirdwx.qlogo.cn/mmopen/vi_32/82ypiarh4VEHapO9g7619xiao4KBfEAe6oVXWKkXYTbvdY5tOLQX0cNHVaBO6g9TJNFrYWDvGwgvPicBZTp615mjA/132',
				
				data: ['s', 'm', 'l']
		  }
		}
	}
</script>

<style lang="stylus" scoped>
	span
		margin 0 .25em
</style>
