<template>
    <div class="chat">
        <h1 class="user">用户{{ currentUser.username }}</h1>
<!--        聊天列表-->
        <div class="chatlist">
            <chatitem-com v-for="(item,index) in chatlist" :chatitem="item" :key="index">
                {{item.chatcontent}}
            </chatitem-com>
        </div>
        <chatinput-com :sendEvent="sendEvent"></chatinput-com>
    </div>
</template>

<script>
    //导入组件
    import chatinputCom from './chatinputcom.vue'
    import chatitemCom from "./chatitem.vue";

    export default {
        props:['currentUser'],
        components:{
            chatinputCom,chatitemCom
        },
        data(){
            return{
                chatlist:[
                    {
                        user:{
                            username: '小明',
                            headerimg: require('../assets/1.jpg')
                        },
                        chatcontent:'吃了吗'
                    }
                ]
            }
        },
        methods :{
            sendEvent:function (value) {
                this.chatlist.push({
                    user:{
                        username: '小明',
                        headerimg: require('../assets/1.jpg')
                    },
                    chatcontent:value
                })

                this.chatlist.push({
                    user:this.$root.$children[0].currentUser,
                    chatcontent:new Date()
                })

            }
        }

    }
</script>

<style scoped>

    .chat {
        width: 500px;
        height: 700px;
        border: 1px solid #ccc;
    }

</style>