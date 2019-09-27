<template>
	<div class="o-pager">
		<slot></slot>
	</div>
</template>

<script>
	import {version, prefix} from '../../../../package.json'
	export default {
		name: `${prefix}Pager`,
		
		data() {
			return {
				
			}
		}
	}
</script>

<style src="../style.styl" lang="stylus" />
