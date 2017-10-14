export default {
  props: {
    dynamicArray: {
      type: Array,
      required: true
    }
  },
  render: function (h) {
    const header = this.$slots.header
    const main = this.$slots.main
    const footer = this.$slots.footer
    return h('div', [
      h('header', header),
      h('main', main),
      h('footer', footer),
    ])
  }
}
