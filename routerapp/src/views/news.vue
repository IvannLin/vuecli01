<template>
    <div>
        <h1>新闻页面:{{id}}</h1>
    </div>
</template>

<script>
    export default {
        props:['id'],
        mounted() {
            console.log(this)
        }
    }
</script>

<style scoped>

</style>