<template>
    <div id="app">
        <choose-user></choose-user>
    </div>
</template>

<script>
    import chooseUser from "./chooseUser";


    export default {
        name:'app',
        components:{
            chooseUser
        },
        data(){
            return{
                userlist: []
            }
        },
        beforeMount() {
        }
    }
</script>

<style scoped>

</style>