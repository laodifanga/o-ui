<template>
	<div class="o-panel">
		<slot></slot>
	</div>
</template>

<script>
	import {version, prefix} from '../../../package.json'
	export default {
		name: `${prefix}Panel`,
		
		data() {
			return {
				
			}
		}
	}
</script>

<style src="../../../static/base.css"></style>
<style src="../../../static/Panel/index.css"></style>