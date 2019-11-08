<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/ext/img.vue"
			slot="more">源码</a>

		<demo>
			<div row="wrap">
				<div size="w33" col v-for="fit in fits" :key="fit">
					<o-img gap="m5 p10" border="c" :fit="fit" size="w100" height="85px" :src="avatar" lazy />
					<div text="tc" gap="p5">{{fit || '无'}}</div>
				</div>
			</div>
		</demo>


		<div style="height: 120vh" text="tc">继续下拉 图片懒加载</div>

		<Demo title="lazy 懒加载">
			<div gap="mb5" row="jcsb">
				<o-img width="32.5%" height="100px" :src="logo" lazy />
				<o-img width="32.5%" height="100px" :src="logo" lazy />
				<o-img width="32.5%" height="100px" :src="logo" lazy />
			</div>
			<o-img size="w100" height="200px" :src="logo" lazy />
		</Demo>

		<Demo title="自定义加载">
			<o-img gap="mb5" size="w100" :src="logo" lazy>
				<div style="width: 100%" text="tc" gap="p12" color="bggreen white" slot="loading">图片加载中</div>
			</o-img>

			<o-img size="w100" :src="logo" lazy>
				<img slot="loading" size="w100"
					src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567761758036&di=8c2a3269e731d7bdc107f7612d6ef940&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201712%2F15%2F20171215225903_dPjHa.thumb.700_0.gif" />
			</o-img>
		</Demo>
	</block>
</template>

<script>
	import { img } from 'src'
	export default {
		__name: 'img | 说明',

		components: {
			[img.name]: img
		},

		data() {
			return {
				avatar: '//thirdwx.qlogo.cn/mmopen/vi_32/82ypiarh4VEHapO9g7619xiao4KBfEAe6oVXWKkXYTbvdY5tOLQX0cNHVaBO6g9TJNFrYWDvGwgvPicBZTp615mjA/132',
				logo: '//thirdwx.qlogo.cn/mmopen/vi_32/82ypiarh4VEHapO9g7619xiao4KBfEAe6oVXWKkXYTbvdY5tOLQX0cNHVaBO6g9TJNFrYWDvGwgvPicBZTp615mjA/0',
				fits: ['', 'fill', 'contain', 'cover', 'none', 'scale-down']
			}
		}
	}
</script>

<style>
</style>