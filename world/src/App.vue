<template>
  <div id="app">
<!--    <h1>{{ msg }}</h1>-->

    <div class="content">
      <chat-com :currentUser="currentUser"></chat-com>
      <userlist-com @chooseUser="toggleUser" :userlist="userlist"></userlist-com>
      <app></app>
<!--      <router-link to="/wechat">微信聊天</router-link>-->
    </div>


  </div>
</template>


<script>
  import chatCom from './components/chat-com.vue'
  import userlistCom from './components/list-com.vue'
  import app from "./wechat/app.vue";
  // import chooseUser from "./wechat/chooseUser";


  export default {
    name: "app",
    components:{
      chatCom,userlistCom,app
    },
    data(){
      return {
        msg: '老陈聊天',
        userlist:[
          {
            username:"小明",
            headerimg: require('./assets/1.jpg')
          },
          {
            username:"小白",
            headerimg: require('./assets/2.jpg')
          },
          {
            username:"小花",
            headerimg: require('./assets/3.jpg')
          }
        ],

          currentUser:{
              username:"小明",
              headerimg: require('./assets/1.jpg')
          }
      }
    },
      methods:{
          toggleUser:function(index) {
              this.currentUser = this.userlist[index]

          }
      }
  }
</script>

<style scoped>

  .content{
    display: flex;
    width: 800px;
    height: 700px;
    margin: 100px auto;
  }

</style>
