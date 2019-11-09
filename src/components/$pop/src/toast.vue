<template>
  <modal ref="modal" v-bind="$props">
    <div class="o-pop-toast">
      <div class="o-pop-toast__cont">
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
    props: {
      content: { type: [String, Object], default: 'toast' },
      delay: { type: Number, default: 2000 },
      success: { type: Function, default: () => { } },

      type: { type: String, default: 'center' },
      transName: { // 动画，结合自带动画名称o-fade, o-move-bottom ...
        default: 'o-zoom'
      },
      type: { // 弹出方式 top center bottom left right
        default: 'center'
      },
      show: { // 显示弹窗
        default: false,
      },
      custom: { // 是否自定义
        default: true,
      },
      maskBackground: {
        default: 'rgba(0,0,0,0)'
      },
      maskClick: { // 蒙层点击是否关闭弹窗
        default: false
      },
      mask: { // 是否显示蒙层
        default: true,
      },
    },
 
    mounted() {
      this.timer = null
      this.open()
    },

    methods: {
      open() {
        if(this.timer) return
        if (this.delay > 0) {
          this.timer = setTimeout(this.close, this.delay)
        }
        this.$refs.modal.open()
      },
      close() {
        this.$refs.modal.close()
        this.success()
        this.timer = null
        this.$destroy()
      }
    }
  }
</script>

<style src="../style.styl" lang="stylus" />