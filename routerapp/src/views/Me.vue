<template>
    <div>
        <h1>这是个人中心</h1>
        <button @click="goAbout">按钮</button>
    </div>
</template>

<script>
    export default {
        name: "Me",
        methods:{
            goAbout(e){
                this.$router.push({
                    path:'/about'
                })

            }
        }
    }
</script>

<style scoped>

</style>