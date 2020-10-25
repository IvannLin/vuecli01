<template>
    <div>
        <h1>action</h1>
        <h1>{{num}}</h1>
<!--        <button @click="addNum">添加NUM</button>-->
        <button @click="getDz">点击获取段子1</button>
        <button @click="setDz">点击获取段子2</button>
        <ul>
            <li v-for="(item,index) in duanzi" :key="index">{{index+1}} :{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState,mapActions,mapMutations} from 'vuex'
    let mapStateObj = mapState(['duanzi','num'])
    let mapActionsObj = mapActions(['setDz'])
    // let mapMutationsObj = mapMutations(['addNum','setNum'])
    export default {
        computed:{
            ...mapStateObj,
        },
        methods:{
            getDz:function () {
                this.$store.dispatch('setDz')
            },
            ...mapActionsObj,
            // ...mapMutations,
        }
    }
</script>

<style scoped>
    ul{
        list-style-type: none;
        text-align: left;
    }
</style>