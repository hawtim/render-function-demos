<template>
  <div id="demo-wrapper">
    <div class="area anchor">
      <p>单文件组件写法</p>
      <Anchor :level="1" title="1级标题">1级标题</Anchor>
      <Anchor :level="2" title="2级标题">2级标题</Anchor>
      <Anchor :level="3" title="3级标题">3级标题</Anchor>
      <Anchor :level="4" title="4级标题">4级标题</Anchor>
      <Anchor :level="5" title="5级标题">5级标题</Anchor>
      <Anchor :level="6" title="6级标题">6级标题</Anchor>
    </div>

    <div class="area anchor-render">
      <p>render 函数</p>
      <AnchorRender :level="1" title="1级标题">1级标题</AnchorRender>
      <AnchorRender :level="2" title="2级标题">2级标题</AnchorRender>
      <AnchorRender :level="3" title="3级标题">3级标题</AnchorRender>
      <AnchorRender :level="4" title="4级标题">4级标题</AnchorRender>
      <AnchorRender :level="5" title="5级标题">5级标题</AnchorRender>
      <AnchorRender :level="6" title="6级标题">6级标题</AnchorRender>
    </div>

    <div class="area tree">
      <p>使用 render 函数完成目录树节点内容的自定义</p>
      <Tree></Tree>
    </div>

    <div class="area tree-jsx">
      <p>使用 render 函数配合 <b>JSX</b> 完成目录树节点内容的自定义</p>
      <TreeJSX></TreeJSX>
    </div>

    <div class="area render-slot">
      <p>使用render和slot实现组件顺序的切换</p>
      <RenderSlot :dynamic-array="dynamicArray">
          <div :slot="dynamicArray[0]" id="header" class="block" @click="showMessage">
            这是头部
          </div>
          <div :slot="dynamicArray[1]" id="main" class="block">
            这是主体
          </div>
          <div :slot="dynamicArray[2]" id="footer" class="block">
            这是底部
          </div>
      </RenderSlot>
      <el-button type="primary" @click="changeDynamicArray" style="margin-top: 20px;">切换顺序</el-button>
    </div>

    <div class="area clone-vnode">
      <p>render函数克隆节点</p>
      <cloneVnode>
        <Tree></Tree>
      </cloneVnode>
    </div>

    <div class="area toggle-component">
      <p>component 元素和 is 属性切换显示的组件</p>
      <el-button type="primary" @click="toggle" style="margin-top: 20px;margin-bottom: 20px;">切换组件</el-button>
      <keep-alive>
        <component v-bind:is="currentView">
          <!-- 组件在 vm.currentview 变化时改变！ -->
        </component>
      </keep-alive>
    </div>

  </div>
</template>
<script>
  import Anchor from '@/components/Anchor'
  import AnchorRender from '@/components/AnchorRender'
  import Tree from '@/components/Tree'
  import TreeJSX from '@/components/TreeJSX'
  import RenderSlot from '@/components/renderSlot'
  import cloneVnode from '@/components/clonedVnode'

  export default {
    components: {
      Anchor,
      AnchorRender,
      Tree,
      TreeJSX,
      RenderSlot,
      cloneVnode,
      first: {
        template: '<div>这里是子组件1</div>'
      },
      second: {
        template: '<div>这里是子组件2，这里是1秒后显示的内容：{{hello}}</div>',
        data: function () {
          return {
            hello: ''
          }
        },
        activated: function () {
          setTimeout(() => {
            this.hello = 'world!';
          }, 1000)
        }
      },
      third: {
        template: '<div>这里是子组件3</div>'
      }
    },
    data() {
      return {
        dynamicArray: ['footer', 'header', 'main'],
        currentView: ''
      }
    },
    methods: {
      changeDynamicArray() {
        this.dynamicArray.reverse()
      },
      showMessage() {
        this.$message.info('提示信息')
      },
      toggle() {
        const arr = ['first', 'second', 'third', '']
        const index = arr.indexOf(this.currentView)
        if (index < 3) {
          this.currentView = arr[index + 1]
        } else {
          this.currentView = arr[0]
        }
      }
    }
  }

</script>
<style lang="scss" rel="stylesheet/scss">
  #demo-wrapper {
    padding-top: 50px;
    padding-bottom: 100px;
  }
  .area {
    margin-top: 40px;
  }
  .block {
    width: 200px;
    height: 200px;
    line-height: 200px;
    border: 1px solid #ccc;
    text-align: center;
    margin-top: 20px;
  }
</style>
