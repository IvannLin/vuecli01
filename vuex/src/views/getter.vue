<template>
    <div>
        <h1>
            {{$store.getters.reverseMsg}}
        </h1>
        <h2>{{reverseMsg}}</h2>
        <h2>{{mixMsg}}</h2>
        <h3>{{msg}}</h3>
        <h3>{{age}}</h3>
        <h2>{{mixMsg1}}</h2>
    </div>
</template>

<script>
    import {mapGetters,mapState} from  'vuex'
    let mapgetters = mapGetters(['reverseMsg', 'mixMsg'])
    let mapstate = mapState(['msg','age'])
    export default {
        mounted() {
            console.log(this)
        },

        // computed:{
        //     reverseMsg:function () {
        //         return this.$store.getters.reverseMsg
        //     }
        // }

        computed: {
            mixMsg1:function(){
                return this.$store.getters.mixMsg('vuex vuex')

            },
            ...mapgetters,
            ...mapstate

        }


    }
</script>

<style scoped>

</style>