<template>
  <div :style="{ background: current.hex }" class="page" gap="pl10 pr10 pb10">
    <div
      class="current"
      :style="{ background: current.hex }"
      gap="p10"
      :color="fontColor"
    >
      <div gap="p5" text="tc">
        <div text="b 20">{{ current.name }}</div>
        <div text="12" gap="mt5">{{ current.pinyin.toUpperCase() }}</div>
      </div>
      <div gap="p5" row>
        <div col="1">
          &nbsp;&nbsp;&nbsp;HEX: {{ current.hex.toUpperCase() }}
        </div>
        <span radius btn="s" color="bgmain white" v-clipboard:copy="current.hex" v-clipboard:success="copy">复制</span>
      </div>
      <div gap="p5" row>
        <div col="1">CMYK: {{ current.CMYK }}</div>
        <span radius btn="s" color="bgmain white" v-clipboard:copy="current.CMYK" v-clipboard:success="copy">复制</span>
      </div>
      <div gap="p5" row>
        <div col="1">&nbsp;&nbsp;&nbsp;RGB: {{ current.RGB }}</div>
        <span radius btn="s" color="bgmain white" v-clipboard:copy="`RGB(${current.RGB})`" v-clipboard:success="copy">复制</span>
      </div>
    </div>
    <div row="jcsb wrap">
      <div
        class="col5"
        text="tc"
        gap="mt10"
        :color="getFontColor(d)"
        v-for="(d, i) in data"
        :key="i"
        @click="changeBackground(d)"
        :style="{ background: d.hex }"
      >
        <div
          class="colorCont"
          :shadow="d.name == current.name"
          :border="d.name == current.name ? 'c' : false"
        >
          <div>{{ d.name }}</div>
          <!-- <div>{{ d.name }} {{ d.pinyin }}</div>
          <div>{{ d.hex }}</div>
          <div>{{ d.CMYK }}</div>
          <div>{{ d.RGB }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueClipboard from "vue-clipboard2"
  Vue.use(VueClipboard)
  import axios from "axios"

  export default {
    computed: {
      fontColor() {
        return this.getFontColor(this.current)
      }
    },
    data() {
      return {
        data: "",
        current: {
          CMYK: [4, 5, 18, 0],
          RGB: [249, 244, 220],
          hex: "#f9f4dc",
          name: "乳白",
          pinyin: "rubai"
        }
      }
    },

    async created() {
      let res = await axios.get("//p4.suibianyuming.com.cn/color/colors.json")
      this.data = res.data
    },

    methods: {
      changeBackground(d) {
        this.current = d
      },
      getFontColor(d) {
        let { RGB } = d
        let total = RGB.reduce((d, c) => d + c, 0)
        return total > 560 ? "main" : "white"
      },
      copy() {
        this.$pop.toast('复制成功')
      }
    }
  }
</script>

<style lang="stylus">
  .page, .current {
    transition all .25s
  }
  .current {
    position sticky
    top 0

  }
  .colorCont {
    height 100px
    line-height 100px
    box-sizing border-box
  }
</style>
