<!-- 深度定制 Tree 组件节点内容的代码， 不可允许，只用于演示 -->
<!-- 抽象的结构如下 -->
<!-- <template>
    <el-tree-node>
      <loading></loading>
      <el-tooltip></el-tooltip>
      <toc></toc>
      <el-popover></el-popover>
    </el-tree-node>
</template> -->

<template>
  <el-tree
    :data="treeData"
    props="defaultProps"
    node-key="id"
    :highlight-current="true"
    :default-expanded-keys="expandedKey"
    :default-expand-all="false"
    :expand-on-click-node="true"
    @node-expand="expandChildNode"
    @node-collapse="hideChildNode"
    @node-click="handleNodeClick"
    :auto-expand-parent="false"
    empty-text="no content"
    :accordion="false"
    :indent="10"
    :current-node-key="currentNodeKey"
    render-content="renderContent">
  </el-tree>
</template>
<script>
  import vuex from 'vuex'
  import {
    mapActions
  } from 'vuex'

  export default {
    data() {
      return {
        defaultProps: {
          label: 'title',
          children: 'children'
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
    computed: {
      treeData() {
        return this.$store.getters.getTreeData
      },
      currentNodeKey() {
        return this.$store.getters.getCurrrentNodeKey
      },
      expandedKey() {
        return this.$store.getters.getExpandedKey
      }
    },
    created() {
      this.loadTopNode()
    },
    methods: {
      ...mapAction([
        'saveTopNode',
        'saveCurrentNode',
        'savePositionCurrentId',
        'updateExpandedKey',
        'deleteNodeTree',
        'clearCurrentId',
        'clearTopNode',
        'clearCurrentNode',
        'clearPlaceholderNode'
      ]),
      renderContent(h, {node, data, store}) {
        let directives = [{
          name: 'toc',
          value: data.toc
        }]
        let popperOptions = {
          boundariesElement: 'container'
        }
        return (<span class={{
          'el-tree-node_label': true,
          'is-leaf': data && (!data.children || !data.children.length),
          'has-toc': data.toc}}
          style={titleMaxWidth}
          key={data.id}>
          {data.loading ?
              <span class="loading">
                  <span class="el-tree-node__loading-icon el-icon-loading"></span>
              </span>
              : ''
          }
          {node.label && node.label.length > 20 ?
              <el-tooltip
                class="item"
                effect="light"
                visible-arrow={false}
                open-delay={300}
                content={node.label}
                placement="bottom-start">
                <span class="title" on-click={() => this.handleNodeClick(data)}>{node.label}</span>
              </el-tooltip>
              : <span class="title" on-click={() => this.handleNodeClick(data)}>{node.label}</span>
          }
          {data.toc ?
            <div class="toc markdown-body editormd-preview-container" style={tocLeft}>
              <div class="toc-arrow"></div>
              <div onClick={this.goPosition} {...{directives}}></div>
            </div>
            : ''
          }
          <el-popover
            placememnt="bottom"
            width="100"
            trigger="click">
            <span slot="reference"
              class="option"
              on-click={ ($event) => { this.clickHandler($event, data) }}>
                <el-button
                  class="icon more"
                  size="mini"
                  type="primary"
                  plain={true}>
                  操作
                </el-button>
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
