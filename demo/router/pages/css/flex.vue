<template>
  <block>
    <a
      color="main"
      href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/css/flex.vue"
      slot="more"
      >源码</a
    >

    <demo v-for="d in data" :title="`row=${d}`">
      <div :row="d">
        <div
          gap="p10"
          :color="`white ${n % 2 ? 'bgmain' : 'bgred'}`"
          v-for="n in 6"
        >
          {{ n }}
        </div>
      </div>
    </demo>

    <demo v-for="d in adata" :title="`row=${d}`">
      <div :row="d">
        <div
          gap="p10"
          :style="`height: ${n % 2 ? '50' : ''}px`"
          :color="`white ${n % 2 ? 'bgmain' : 'bgred'}`"
          v-for="n in 6"
        >
          {{ n }}
        </div>
      </div>
    </demo>

    <demo v-for="d in jdata" :title="`row=${d}`">
      <div :row="d">
        <div
          gap="p10"
          :color="`white ${n % 2 ? 'bgmain' : 'bgred'}`"
          v-for="n in 6"
        >
          {{ n }}
        </div>
      </div>
    </demo>

    <demo title="row=wrap">
      <div row="wrap">
        <div
          gap="p10"
          :color="`white ${n % 2 ? 'bgmain' : 'bgred'}`"
          v-for="n in 16"
        >
          {{ n }}
        </div>
      </div>
    </demo>

    <demo title="col=x">
      <div row>
        <div
          gap="p10"
          :col="n"
          :color="`white ${n % 2 ? 'bgmain' : 'bgred'}`"
          v-for="n in 6"
        >
          {{ n }}
        </div>
      </div>
    </demo>

    <demo title="jcsb 自适应排列">
      <div gap="p10">
        <span
          :color="currentCol == d ? 'bgmain white' : ''"
          btn
          v-for="(d, i) in cols"
          :key="i"
          @click="currentCol = d"
        >
          {{ d }}
        </span>
      </div>
      <div row="jcsb wrap">
        <div
          :class="currentCol"
          text="tc"
          gap="mt5"
          v-for="(d, i) in 8"
          :key="i"
        >
          <img
            src="http://thirdwx.qlogo.cn/mmopen/vi_32/82ypiarh4VEHapO9g7619xiao4KBfEAe6oVXWKkXYTbvdY5tOLQX0cNHVaBO6g9TJNFrYWDvGwgvPicBZTp615mjA/132"
            size="w100"
          />
        </div>
      </div>
    </demo>
  </block>
</template>

<script>
  export default {
    __name: "row && col | flex布局",

    data() {
      return {
        data: ["", "row-reverse"],
        adata: ["aifs", "aic", "aife"],
        jdata: ["jcfs", "jcsb", "jcsa", "jcc", "jcfe"],
        cols: ["col1", "col2", "col3", "col4", "col5"],
        currentCol: "col4"
      }
    }
  }
</script>

<style></style>
