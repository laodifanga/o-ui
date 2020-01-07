<template>
  <block>
    <a
      color="main"
      href="https://github.com/laodifanga/o-ui/blob/master/demo/router/pages/form/checkbox.vue"
      slot="more"
      >源码</a
    >

    <demo>
      <div row="aic">
        复选框
        <o-checkbox gap="ml5 mr5"></o-checkbox>
        我在外面，点我不能选择
      </div>
    </demo>

    <demo>
      <o-checkbox>
        我是内部的文字，点我也可以选择
      </o-checkbox>
    </demo>

    <demo>
      <o-checkbox color="red">
        我是内部的文字，点我也可以选择
      </o-checkbox>
    </demo>

		<demo>
      <o-checkbox color="red">
        <div color="green">我是内部的文字，点我也可以选择</div>
      </o-checkbox>
    </demo>
  </block>
</template>

<script>
  import { checkbox } from "src"
  export default {
    __name: "checkbox | 多选框 | true",
    components: {
      [checkbox.name]: checkbox
    }
  }
</script>

<style></style>
