<template>
  <modal ref="modal" v-bind="$props" @changed="changed">
    <div class="o-pop-toast">
      <div class="o-pop-toast__cont">
        <div class="icon" v-if="image"><img :src="image"></div>
        <div class="icon" v-if="ico"> 
          <i :class="`ico-${ico}`" text="50"></i>
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
    props: {
      content: { type: [String, Object], default: 'toast' },
      duration: { type: Number, default: 2000 },
      success: { type: Function, default: () => { } },

      type: { type: String, default: 'center' }, // 弹出方式 top center bottom left right
      transName: { // 动画，结合自带动画名称o-fade, o-move-bottom ...
        default: 'o-zoom'
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
        default: false,
      },
      image: { // 自定义图片图标
        default: ''
      },
      ico: { // 图标
        default: ''
      }
    },
 
    mounted() {
      this.timer = null
      this.open()
    },

    methods: {
      open() {
        if(this.timer) return
        if (this.duration > 0) {
          this.timer = setTimeout(this.close, this.duration)
        }
        this.$refs.modal.open()
      },
      close() {
        this.$refs.modal.close()
        this.success()
        this.timer = null
      },
      changed() {
        this.$refs.modal.destroy()
      }
    }
  }
</script>

<style src="../style.styl" lang="stylus" />