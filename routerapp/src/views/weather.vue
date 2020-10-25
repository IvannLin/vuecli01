<template>
    <div>
        <h1>天气</h1>
        <h2>城市:</h2>
        <h3>温度:</h3>
        <h3>风向:</h3>
        <router-link to="/about">进入about页面</router-link>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        async beforeMount() {
            let key = ''
            let httpUrl = ``
            let res = await axios.get(httpUrl)
            console.log(res)
        }
    }
</script>

<style scoped>

</style>