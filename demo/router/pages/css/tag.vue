<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/tag.vue"
			slot="more">源码</a>

		<demo>
			<span tag>tag</span>
			<span tag color="white bgmain" gap="m5">tag <i class="ico-close"></i></span>
		</demo>

		<demo title="上下标 sup sub">
			上标<span tag="sup">0</span>
			下标<span tag="sub">0</span>
		</demo>

		<demo title="上下标 + dot">
			上标<span tag="sup dot" color="bgmain"></span>
			下标<span tag="sub dot" color="bgmain"></span>
		</demo>

		<demo>
			订单数<b tag="sup">9</b>
			消息<b tag="sup" color="bgfail white">99</b>
			留言<b tag="sup" color="bgmain white">999999</b>
		</demo>

		<demo title="tag + color">
			<span v-for="c in color.split(' ')" gap="m5" tag radius :color="`bg${c} white`">标签</span>
		</demo>

		<demo title="tag + color">
			<span v-for="c in color.split(' ')" gap="m5" tag :color="`bg${c} white`">标签</span>
		</demo>

		<demo title="tag + color">
			<span v-for="c in color.split(' ')" gap="m5" tag="plat +" :color="`bg${c}10 ${c}`">标签</span>
		</demo>

		<demo title="tag=plat + color">
			<span v-for="c in color.split(' ')" gap="m5" tag="plat" :color="`${c}`">标签</span>
		</demo>

		<demo title="tag=plat + color + radius">
			<span v-for="c in color.split(' ')" gap="m5" tag="plat" radius="100" :color="`${c}10`"><span
					:color="c">标签</span></span>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'tag | 标签',

		data() {
			return {
				color: 'main orange yellow lime green aqua teal blue navy fuchsia purple red maroon silver gray black'
			}
		}
	}
</script>

<style>
</style>