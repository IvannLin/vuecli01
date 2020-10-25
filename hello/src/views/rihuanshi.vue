<template>
    <div class="rihuanshi">
        <h1>日环食</h1>
        <div class="eclipse eclipse-before">  </div>
        <div class="eclipse eclipse-after">  </div>
<!--        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>-->
    </div>
</template>

<script>
    export default {
        name: "rihuanshi"
    }
</script>

<style scoped>


    *{
        margin: 0;
        padding: 0;
        text-align: center;
    }

    h1{
        padding-top: 100px;
    }

    .rihuanshi{
        background-color: skyblue;

        animation: bgChange 5s linear infinite;

        height: 40rem;
        width: 100%;
        margin: 0 auto;

    }

    .eclipse{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin: auto;
    }

    .eclipse-after{
        animation: eclipse 5s linear infinite;
    }

    .eclipse-before{
        background-color: #fff;
        animation: shadow 5s linear infinite;
    }


    @keyframes bgChange {
        0%,100%{
            background: skyblue;
        }
        45%,60%{
            background: #282c34;
        }
    }

    @keyframes shadow{
        50%{
            box-shadow: 0 0 10px 5px #fff;
        }
    }


    @keyframes eclipse{
        0%{
            left: 300px;
            top: 100px;
            background: skyblue;
        }
        45%,60%{
            left: 0;
            top: 0;
            background: #282c34;
        }
        100%{
            left: -300px;
            top: -100px;
            background: skyblue;
        }
    }

</style>