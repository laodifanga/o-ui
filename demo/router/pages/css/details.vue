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
				<summary color="fail"><div color="bgline " border="c" gap="p10">菜单</div></summary>
				<div border="c l r b" gap="p50" color="fail">
					老地方
				</div>
			</details>

			<details details gap="mt10">
				<summary color="white"><div color="bginfo white" gap="p20">菜单</div></summary>
				<div gap="p20" border="c" color="info">
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
