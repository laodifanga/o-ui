<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/ext/img.vue"
			slot="more">源码</a>

		<demo>
			<div row="wrap">
				<div text="tc" size="w50" col v-for="fit in fits" :key="fit">
					<o-img gap="p5" border :fit="fit" height="180px" :src="avatar" lazy />
					<div text="tc" gap="p5">{{fit || '无'}}</div>
				</div>
			</div>
		</demo>

		<demo title="图片加载失败">
			<o-img :error-src="logo" lazy src="//29mn.com/1.jpg" width="50px" height="50px" border gap="p10"></o-img>
		</demo>


		<div gap="m30" text="tc">继续下拉 图片懒加载</div>

		<demo title="lazy 懒加载">
			<div row="wrap jcsb">
				<o-img gap="m5" v-for="d,i in imgs" width="30%" height="100px" :key="i" :src="d" lazy />
			</div>
		</demo>

		<demo title="自定义加载">
			<div row>
				<o-img gap="m5" size="w100 h100" :src="lazyimg" lazy>
					<div style="width: 100%; height: 100%;" text="tc" gap="p12" color="bgmain white" slot="loading">图片加载中</div>
				</o-img>

				<o-img gap="m5" size="w100 h100" :src="lazyimg" lazy>
					<img slot="loading" size="w100"
						src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567761758036&di=8c2a3269e731d7bdc107f7612d6ef940&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201712%2F15%2F20171215225903_dPjHa.thumb.700_0.gif" />
				</o-img>
			</div>
		</demo>
	</block>
</template>

<script>
	import { img } from 'src'
	export default {
		__name: 'img | 图片',

		components: {
			[img.name]: img
		},

		data() {
			return {
				lazyimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573278327265&di=a733c30decb89171bbdd73f2c2a1eb05&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F54855292dfe86.jpg',
				avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573278326994&di=a0f7e269b2a5915c488df4db68865d68&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F1%2F56cd7a9a2a615.jpg',
				logo: 'https://oui.29mn.com/logo.png',
				fits: ['', 'fill', 'contain', 'cover', 'none', 'scale-down'],
				imgs: [
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573278327271&di=dd94806e5d1c62e30f3e87f7f92e3add&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F53f2e99b9bdee.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573278327270&di=f87b127b0dc39e3fb754a76a15670247&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201311%2F04%2F20131104230850_5kFJR.jpeg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573278327270&di=f959a6374800883788af24dc5511d0e1&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201306%2F26%2F135204hcocqnunln2caxal.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573278327270&di=92003584c88475193e2336627d12e66d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F4%2F53aa90bbb1061.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573278327266&di=711eb432edbd346b63d1df6dfdeddcc5&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F584e03efe2511.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573278327266&di=03ba175b5cbe532f9e87241355a31d08&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F550919af75ca5.jpg',
				]
			}
		}
	}
</script>

<style>
</style>