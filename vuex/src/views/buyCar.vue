<template>
    <div>
        <h1>buycar</h1>
        <h2>{{$store.state.buyCar.productNum}}</h2>
        <h2>{{buyCar.productNum}}</h2>
        <h2>{{$store.getters['buyCar/brief']}}</h2>
        <button @click="$store.commit('buyCar/addProNum')">添加数量</button>
        <button @click="$store.dispatch('buyCar/changeProNum')">添加数量</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    let mapStateObj = mapState(['buyCar'])
    let mapGettersObj = mapGetters(['brief'])
    let mapMutationsObj = mapMutations(['addProNum'])
    let mapActionsObj = mapActions(['changeProNum'])
    export default {
        mounted() {
            console.log(this)
        },
        computed:{
            ...mapStateObj,
            ...mapGettersObj,

        },
        methods:{
            ...mapMutationsObj,
            ...mapActionsObj
        }
    }
</script>

<style scoped>

</style>