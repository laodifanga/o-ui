export default {
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('hashchange', this.close)
    });
  },
  beforeDestroy() {
    window.removeEventListener('hashchange', this.close)
  }
}