<template>
	<block>
		<a color="main" href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/size.vue"
			slot="more">源码</a>


		<demo>
			<div row="wrap">
				<div size="w62" color="bgmain white" row="wrap">
					<div gap="p15">w62</div>
				</div>
				<div size="w38" color="bgblack white">
					<div gap="p15">w38</div>
				</div>
			</div>
			<div row="wrap">
				<div size="w62" row="wrap">
					<div size="w62" color="bgsuccess white">
						<div gap="p10">w62</div>
					</div>
					<div size="w38" color="bgwarning white">
						<div gap="p10">w38</div>
					</div>
				</div>
				<div size="w38" row="wrap">
					<div size="w62" color="bgsuccess white">
						<div gap="p10">w62</div>
					</div>
					<div size="w38" color="bgwarning white">
						<div gap="p10">w38</div>
					</div>
				</div>
			</div>
		</demo>

		<demo title="size=w?">
			<div row="wrap">
				<div v-for="d,i in data.split(' ')" :color="i%2 ? 'bgmain white' : 'bgblack white'" :size="`w${d}`">
					<div gap="p15">w{{d}}</div>
				</div>
			</div>
		</demo>

		<demo title="size=h?">
			<div style="height: 200px;">
				<div v-for="d,i in data.split(' ')" :color="i%2 ? 'bgmain white' : 'bgblack white'" :size="`h${d}`">
					<div gap="p15">h{{d}}</div>
				</div>
			</div>
		</demo>
	</block>
</template>

<script>
	export default {
		__name: 'size | 尺寸',

		data() {
			return {
				data: '62 38 50 25 33 100'
			}
		}
	}
</script>

<style>
</style>