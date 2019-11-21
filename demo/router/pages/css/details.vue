<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/details.vue" slot="more">源码</a>

		<demo>
			<details details gap="mt10">
				<summary><div gap="p10">菜单</div></summary>
				<div gap="p15">
					老地方
				</div>
			</details>
		</demo>

		<demo title="自定义">
			<details details gap="mt10">
				<summary color="red"><div color="bgsilver " border="c" gap="p10">菜单</div></summary>
				<div border="c l r b" gap="p50" color="red">
					老地方
				</div>
			</details>

			<details details gap="mt10">
				<summary color="white"><div color="bgblue white" gap="p20">菜单</div></summary>
				<div gap="p20" border="c" color="blue">
					<span color="title">老地方</span>
				</div>
			</details>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'details | 折叠菜单'
	}
</script>

<style>
</style>
