<template>
    <div>
        <h1>bignews</h1>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "bignews",
        mounted() {
            console.log(this)
        },

    }
</script>

<style scoped>

</style>