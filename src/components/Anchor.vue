<template>
  <div class="hello">
    <h2>render 函数</h2>
    <ul>
      <li><a href="#aaa">Link</a></li>
      <li><a href="#bbb">Link</a></li>
      <li><a href="#ccc">Link</a></li>
      <li><a href="#ddd">Link</a></li>
    </ul>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>
  export default {
    name: '锚点',
    data() {
      return {
        links: []
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  /* font-weight: normal; */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
