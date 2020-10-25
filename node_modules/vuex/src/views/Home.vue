<template>
  <div class="home">
    <h1>点击数量:{{count}}</h1>
    <button @click="addEvent">添加点击事件</button>



<!--vuex的方式-->
    <h1>vue的方式</h1>
    <h1>点击数量:{{$store.state.num}}</h1>
    <button @click="emitAction">添加点击事件</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      count:0
    }
  },
  methods:{
    addEvent:function () {
      this.count++;
    },
    emitAction:function () {
      this.$store.commit('addNum')
    }
  }
}
</script>
