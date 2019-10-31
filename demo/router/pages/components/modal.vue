<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/components/modal.vue"
			slot="more">源码</a>

		<demo>
			<o-modal ref="modal">
				我是modal内容
			</o-modal>

			<o-modal ref="modal1" :custom="true" type="left" :mask-click="false" trans-name="o-move-left" :show="show" @change="e => show = e.value">
				<div size="h100" color="bgmain">
					<div gap="p36">
 						<span btn @click="show = false">点我关闭</span>
					</div>
				</div>
			</o-modal>

			<span btn @click="$refs.modal.open()">显示</span>
			<span btn @click="show = true" color="bgmain white">自定义show方式{{show}}</span>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'modal | 模态框',

		data() {
			return {
				show: false
			}
		}
	}
</script>

<style>
</style>