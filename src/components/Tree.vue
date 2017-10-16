<template>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" :render-content="renderContent">
  </el-tree>
</template>
<script>
  export default {
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1',
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1',
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1',
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1',
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1',
            }]
          }]
        }],
        options: [
          {
            name: '操作一'
          },
          {
            name: '操作二'
          },
          {
            name: '操作三'
          }
        ]
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data.label)
      },
      clickHandler(e) {
        e.preventDefault()
        e.stopPropagation()
      },
      renderContent(h, { node, data, store }) {
        return h(
          'span', {
            props: {
              level: 1
            },
            class: 'el-tree-node_label'
          }, [
            h('span', data.label), [h('ElPopover', {
              attrs: {
                placement: 'bottom',
                width: '100',
                trigger: 'click'
              }
            }, [
              h('span', {
                slot: 'reference',
                class: {
                  option: true
                },
                on: {
                  click: this.clickHandler
                }
              }, [h('El-Button', {
                class: {
                  icon: true,
                  more: true
                },
                attrs: {
                  size: 'mini',
                  type: 'primary',
                  plain: true
                }
              }, '操作')]),
              h('ul', {
                class: {
                  options: true
                }
              }, this.options.map(option => h('li', option.name)
              ))
            ])]
          ]
        )
      }
    }
  }

</script>
<style lang="scss" rel="stylesheet/scss">
  .icon {
    display: inline-block;
    margin-left: 20px;
  }

  .el-popover {
    padding: 0;
  }
  .el-popover ul {
    padding: 10px 0;
  }

  .el-popover ul li {
    list-style-type: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 2;
    padding-left: 10px;
  }

  .el-popover ul li:hover {
    background-color: #ebebeb;
    color: #05bdbf;
  }

</style>
