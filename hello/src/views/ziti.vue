<template>
    <div class="tobe">
        <div class="text">to be or not to be</div>
        <div class="inner-text">that's a question</div>
        <div class="text">to be or not to be</div>
    </div>
</template>

<script>
    export default {
        name: "ziti"
    }
</script>

<style scoped>

    *{
        margin: 0;
        padding: 0;
    }

    .tobe {
        height: 100%;
        background-color: lightcoral;
        justify-content: center;
        align-items: center;
        text-align: center;

        position: relative;

    }

    .tobe .text {
        font-size: 120px;
        line-height: 120px;
        height: 120px;
        text-transform: uppercase;

        /*position: absolute;*/
        top:0;
    }

    .tobe .text:nth-child(1){

    }

    .tobe .text:nth-child(3){
        top: 70px;

    }

    .tobe .inner-text {
        height: 0px;
        overflow: hidden;
        /*transform: scale(1,0);*/

        position: absolute;
        top: 60px;
        width: 100%;
        font-size: 60px;
        line-height: 70px;
        /*transform: scale(1,1);*/
    }

    .tobe:hover {
        height: 190px;
    }


</style>