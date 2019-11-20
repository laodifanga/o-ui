<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/service/pop.vue"
			slot="more">源码</a>

		<demo>
			<div>
				<span btn="main" @click="toast">弹出toast</span>
			</div>


			<div row gap="p10">
				<div gap="mr10">content</div>
				<div col="1">
					<input type="text" v-model="form.content">
				</div>
			</div>

			<div row gap="p10">
				<div gap="mr10">maskBackground</div>
				<div col="1">
					<input type="text" v-model="form.maskBackground">
				</div>
			</div>

			<div row gap="p10">
				<div gap="mr10">duration</div>
				<div col="1">
					<input type="text" v-model.number="form.duration">
				</div>
			</div>

			<div row gap="p10">
				<div gap="mr10">type</div>
				<div col="1">
					<label v-for="d,i in types.split(' ')">
						<input type="radio" :value="d" v-model="form.type">
						{{d}}
					</label>
				</div>
			</div>

			<div row gap="p10">
				<div gap="mr10">transName</div>
				<div col="1">
					<label v-for="d,i in transNames.split(' ')">
						<input type="radio" :value="d" v-model="form.transName">
						{{d}}
					</label>
				</div>
			</div>

			<label row gap="p10">
				<div gap="mr10">custom</div>
				<div col="1">
					<input type="checkbox" v-model="form.custom">
				</div>
			</label>

			<label row gap="p10">
				<div gap="mr10">mask</div>
				<div col="1">
					<input type="checkbox" v-model="form.mask">
				</div>
			</label>

			<label row gap="p10">
				<div gap="mr10">maskClick</div>
				<div col="1">
					<input type="checkbox" v-model="form.maskClick">
				</div>
			</label>

			<div row gap="p10">
				<div gap="mr10">image</div>
				<div col="1">
					<textarea size="w100" rows="3" v-model="form.image"></textarea>
				</div>
			</div>

			<div row gap="p10">
				<div gap="mr10">ico</div>
				<div col="1">
					<input type="text" v-model="form.ico">
				</div>
			</div>

		</demo>

		<demo>
			<div>
				<span btn="main" @click="alert">弹出alert</span>
			</div>
		</demo>

		<demo>
			<div>
				<span btn="main" @click="loading">弹出loading</span>
			</div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: '$pop | toast loading alert',

		data() {
			return {
				types: 'top center bottom left right',
				transNames: 'o-zoom o-fade o-move-top o-move-right o-move-bottom o-move-left',
				form: {
					content: '你好，朋友！',
					type: 'center',
					transName: 'o-zoom',
					custom: true,
					duration: 2000,
					mask: false,
					maskClick: false,
					maskBackground: 'rgba(0,0,0,.3)',
					image: '',
					ico: ''
					// image: 'http://thirdwx.qlogo.cn/mmopen/vi_32/82ypiarh4VEHapO9g7619xiao4KBfEAe6oVXWKkXYTbvdY5tOLQX0cNHVaBO6g9TJNFrYWDvGwgvPicBZTp615mjA/132',
					// ico: 'check'
				}
			}
		},

		methods: {
			toast() {
				this.$pop.toast(this.form)
			},

			alert() {
				// return this.$pop.alert('默认alert')
				this.$pop.alert({
					title: '我是title',
					content: '我是content',
					// maskBackground: 'rgba(0,0,0,.5)',
					success(res) {
						console.log('success', res)
						this.$pop.toast('你点击了确定')
					},
					fail(res) {
						console.log('fail', res)
						this.$pop.toast('你取消了')
					},
				})
			},

			loading() {
				let option = Math.random() > .5 ? {
					content: '自定义加载',
					maskBackground: 'rgba(0,0,0,.1)',
					loading: {
						type: 'flip l',
						color: 'main',
					},
					color: 'black',
					background: 'rgba(255,255,255,.9)'
				} : ''
				this.$pop.loading.open(option)

				setTimeout(() => {
					this.$pop.loading.close()
				}, 2000)
			}
		}
	}
</script>

<style>
</style>