<template>
    <div>
        <h1>名字:{{msg}}</h1>
        <h2>年龄:{{age}}</h2>
        <h2>greenMsg:{{greenMsg}}</h2>
        <h2>数量:{{num}}</h2>
        <input type="text" v-model="num">
        <input type="text" :value="num" @input="changeValue">
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    let obj = mapState({
            msg:'msg',
            age:(state)=>state.age,
            num:'num',
            greenMsg:function(state){
                return this.color + state.msg
            }
        })
    //state在组建中的应用
    export default {
        data:()=>{
            return{
                color:'green'
            }
        },
        // computed:{
        //     msg:function () {
        //         return this.$store.state.msg
        //     },
        //     age:function () {
        //         return this.$store.state.age
        //     },
        //     num:{
        //         get:function () {
        //             return this.$store.state.num
        //         },
        //         set:function (val) {
        //             this.$store.commit('setNum',val)
        //         }
        //     }
        // }

        //第一种映射方式
        // computed:mapState(['msg','age','num']),
        // methods:{
        //     changeValue:function (e) {
        //         this.$store.commit('setNum',e.target.value)
        //     }
        // }

        //第二种映射方式
        computed:mapState({
            msg:'msg',
            age:(state)=>state.age,
            num:'num',
            greenMsg:function(state){
                return this.color + state.msg
            }
        }),

        //第三种映射方式
        // computed:{
        //     reverse:function () {
        //         return this.color.split('').reverse().join('')
        //     },
        //     //... 展开运算符   进行解构
        //     ...obj
        // }
    }
</script>

<style scoped>

</style>