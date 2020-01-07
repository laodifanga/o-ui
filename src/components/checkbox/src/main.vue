<template>
	<label class="o-checkbox">
		<input type="checkbox">
		<i class="check"></i>
		<span class="cont" v-if="$slots && $slots.default">
			<slot></slot>
		</span>
	</label>
</template>

<script>
	import {version, prefix} from '../../../../package.json'
	export default {
		name: `${prefix}Checkbox`,
	}
</script>

<style src="../style.styl" lang="stylus" />