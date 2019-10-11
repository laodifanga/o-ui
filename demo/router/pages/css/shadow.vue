<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/shadow.vue" slot="more">源码</a>
		
		<demo title="默认">
			<div shadow text="tc" gap="m20 p20">shadow</div>
		</demo>

		<demo title="跟随文字色 c">
			<div shadow="c" text="tc" gap="m20 p20" color="main">c</div>
		</demo>

		<demo title="翘边阴影 e">
			<div style="position: relative; z-index: 1">
				<div color="bgwhite" shadow="e" text="tc" gap="m20 p20">e</div>
				<div color="bgwhite main" shadow="c e" text="tc" gap="m20 p20">e</div>
			</div>
		</demo>

		<demo title="跟随背景图 bg">
			<div class="testBg" gap="m20" radius shadow="bg"></div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'shadow | 阴影'
	}
</script>

<style scoped>
	.testBg {  
    height: 20vh;
    background: url(//gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=d7c5d47afb1986184112e7827add024b/b812c8fcc3cec3fd98ddf66ed588d43f869427cd.jpg) no-repeat center center / cover;
		border-radius: 20px;
	}
</style>
