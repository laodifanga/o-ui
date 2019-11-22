export default {
  inject: ['$super'],

  created() {
    this.$super._addItems(this)
  }
}