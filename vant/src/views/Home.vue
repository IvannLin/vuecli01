<template>
  <div class="home">
    <div>
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <div>
      <van-button color="linear-gradient(to top, #4bb0ff, #6149f6)"
      >渐变色按钮</van-button
      >
      <van-button type="primary" block>块级元素</van-button>
    </div>
    <div>
      <van-button :icon="img" type="info"
      >按钮</van-button
      >
    </div>
    <div>
      <van-button type="primary" round="true" to="/about">跳转至about</van-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

let img = require('../../img/火箭.png')

export default {
  name: 'Home',
  data:function () {
    return{
      img
    }

  },

  components: {
    HelloWorld
  }
}
</script>
