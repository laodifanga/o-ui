export default {
  provide() {
    return {
      $super: this
    }
  },

  data() {
    return {
      items: [],
    }
  },

  methods: {
    _addItems(vnode) {
      this.items.push(vnode)
    }
  }
}