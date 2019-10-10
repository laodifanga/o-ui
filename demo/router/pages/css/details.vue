<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/details.vue" slot="more">源码</a>

		<demo>
			<details details gap="mt8">
				<summary><div gap="p12">菜单</div></summary>
				<div gap="p16">
					老地方
				</div>
			</details>
		</demo>

		<demo title="自定义">
			<details details gap="mt8">
				<summary color="fail"><div color="bgline " border="c" gap="p12">菜单</div></summary>
				<div border="c l r b" gap="p16" color="fail">
					老地方
				</div>
			</details>

			<details details gap="mt8">
				<summary color="white"><div color="bginfo white" gap="p12">菜单</div></summary>
				<div gap="p16" border="c" color="info">
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
