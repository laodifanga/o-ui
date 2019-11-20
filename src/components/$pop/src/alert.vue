<template>
  <modal ref="modal" v-bind="$props" @changed="changed">
    <div class="o-pop-alert">
      <div class="o-pop-alert__cont">
        <div class="title" v-if="title">{{title}}</div>
        <div class="content" v-if="content">
          <div class="icon" v-if="image"><img :src="image"></div>
          <div class="icon" v-if="ico">
            <i :class="`ico-${ico}`" text="50"></i>
          </div>
          {{content}}
        </div>
        <div class="footer">
          <div class="btn" @click="tap(1)">确定</div>
          <div class="btn" @click="tap(0)">取消</div>
        </div>
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
      title: { type: [String, Object], default: '' },
      content: { type: [String, Object], default: 'alert' },
      success: { type: Function, default: () => { } },
      fail: { type: Function, default: () => { } },

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
        default: 'rgba(0,0,0,.8)'
      },
      maskClick: { // 蒙层点击是否关闭弹窗
        default: false
      },
      mask: { // 是否显示蒙层
        default: true,
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
      tap(type) {
        this.close()
        type ? this.success(type) : this.fail(type)
      },
      open() {
        this.$refs.modal.open()
      },
      close() {
        this.$refs.modal.close()
      },
      changed() {
        this.$refs.modal.destroy()
      }
    }
  }
</script>

<style src="../style.styl" lang="stylus" />