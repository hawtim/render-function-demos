export default {
  props: {
    level: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  render: function (h) {
    return h(
      'h' + this.level,
      [
        h('a', {
          domProps: {
            href: '#' + this.title
          }
        }, this.$slots.default)
      ]
    )
  }
}
