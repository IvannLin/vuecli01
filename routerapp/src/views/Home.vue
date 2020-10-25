<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
<!--    <button @click="goEvent">跳转至新闻页面</button>-->
<!--    <button @click="go">前进</button>-->
<!--    <button @click="back">后退</button>-->
    <router-link to="/list">跳转至list</router-link>

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
  methods:{
    goEvent:function () {
      //通过路径跳转
      this.$router.push({
        // path:"/news/123?username=laochen&password=123456",
        path:'news/123',
        query:{
          username:'小明',
          password:'8888'
        }
      })

      //通过name属性跳转
      // this.$router.push({
      //   name:'news',
      //   params:{
      //     id:456
      //   }
      // })



      //替换
      // this.$router.replace({
      //   path:"/news/123?username=laochen&password=123456",
      //   path:'news/123',
      //   query:{
      //     username:'小明',
      //     password:'8888'
      //   }
      // },function () {
      //   console.log('成功替换页面')
      // })
    },
    go(){
      this.$router.go(1)
    },
    back(){
      this.$router.go(-1)
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>
