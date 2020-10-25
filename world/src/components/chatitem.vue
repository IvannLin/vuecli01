<template>
    <div class="chatitem">
        <img :style="imgStyle" :src="chatitem.user.headerimg" alt="">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "chatitem",
        props: ['chatitem'],
        data(){
            return {
                imgStyle:{
                    width:"60px",
                    height:"60px"
                }
            }
        }
    }
</script>

<style scoped>
    .chatitem{
        display: flex;
    }
</style>