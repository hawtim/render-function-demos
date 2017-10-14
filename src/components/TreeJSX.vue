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
        }]
      }
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
        return (<span class={{ 'el-tree-node-label': true }}>
            <span>{node.label}</span>
            <el-popover placememnt="bottom" width="100" trigger="click">
              <span slot="reference" class="option" on-click={ ($event) => { this.clickHandler($event, data) }}>
                <el-button class="icon more" size="mini" type="primary" plain={true}>操作</el-button>
              </span>
              <ul class="options">
                <li>操作一</li>
                <li>操作二</li>
                <li>操作三</li>
              </ul>
            </el-popover>
          </span>)
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

  .el-popover ul li {
    list-style-type: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 2;
    padding-left: 10px;
  }

  .el-popover ul li:hover {
    background-color: #ebebeb;
  }

</style>
