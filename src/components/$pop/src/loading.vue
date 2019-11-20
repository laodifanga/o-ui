<template>
  <modal ref="modal" :custom="custom" :mask-background="maskBackground" :mask-click="maskClick" :mask="mask">
    <div class="o-pop-loading" :style="{background}" :color="color">
      <div class="o-pop-loading__cont">
        <div class="loading">
          <span :loading="loading.type" :color="loading.color"></span>
        </div>
        {{content}}
      </div>
    </div>
  </modal>
</template>

<script>
  import onchange from '../mixin.js'
  import modal from '../../modal/src/main.vue'
  export default {
    mixins: [onchange],

    components: { modal },

    data() {
      return {
        custom: true,
        content: '加载中...',
        maskBackground: 'rgba(0,0,0,0)',
        maskClick: false,
        mask: true,
        loading: {
          type: '',
          color: ''
        },
        color: 'white',
        background: 'rgba(0,0,0,.8)'
      }
    },

    methods: {
      open(option) {
        Object.assign(this.$data, option || this.$options.data())
        this.$refs.modal.open()
      },
      close() {
        this.$refs.modal.close()
      }
    }
  }
</script>

<style src="../style.styl" lang="stylus" />