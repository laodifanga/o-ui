<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/components/modal.vue"
			slot="more">源码</a>

		<demo>
			<o-modal ref="modal">
				我是modal内容
			</o-modal>

			<o-modal ref="modal1" :mask="false">
				<span btn @click="$refs.modal1.close()">点我关闭</span>
			</o-modal>


			<o-modal ref="modal2" :custom="true" type="left" :mask-click="false" trans-name="o-move-left" :show="show"
				@change="e => show = e.value">
				<div size="h100" color="bgmain">
					<div gap="p30">
						<span btn @click="show = false">点我关闭</span>
					</div>
				</div>
			</o-modal>

			<o-modal ref="modal3" mask-background=" ">
				我是modal内容
			</o-modal>

			<span btn @click="$refs.modal.open()">显示</span>
			<span btn @click="$refs.modal1.open()">不显示蒙层</span>
			<span btn @click="$refs.modal3.open()">蒙层透明</span>
			<span btn @click="show = true" color="bgmain white">自定义</span>
			show方式{{show}}
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'modal | 模态框 | 0',

		data() {
			return {
				show: false
			}
		}
	}
</script>

<style>
</style>