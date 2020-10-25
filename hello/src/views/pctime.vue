<template>
    <div id="time">
        <div class="box">
            <div class="h one">
                <span class="am">{{status}}</span>
                <span class="heart">❤</span>
                <span class="span">{{ hour }}</span>
            </div> :
            <div class="h"><span class="span">{{minute}}</span></div> :
            <div class="h"><span class="span sec" >{{second}}</span></div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "pctime",
        data(){
            return {
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds(),
                timerH: '',
                timerM: '',
                timerS: '',
                status: '',
            }
        },
        methods:{

        },
        created() {
            this.timerH = setInterval(() =>{
                if (new Date().getHours()<12){
                    this.hour = new Date().getHours()
                    this.status = 'AM'
                }else{
                    this.hour = (new Date().getHours() - 12)
                    this.status = 'PM'
                }
            },1000)
            this.timerM = setInterval(() =>{
                this.minute = new Date().getMinutes()
            },1000)
            this.timerS = setInterval( () =>{
                if(new Date().getSeconds()<10){
                    this.second = '0' + new Date().getSeconds()
                }else{
                    this.second = new Date().getSeconds()
                }
            },1000)

        },

        beforeDestroy() {
            clearInterval(this.timerH)
            clearInterval(this.timerM)
            clearInterval(this.timerS)
        }
    }
    // console.log(new Date().getHours())


</script>

<style scoped>
    #time {
        margin:0 auto;
        width: 100%;
        height: 600px;
        align-items: center;
        background-color: black;
        /*position: absolute;*/
        display:flex;
    }

    .box {
        height: 600px;
        background-color: black;
        /*padding-top: 250px;*/
        /*margin-top: 300px;*/
        width: 85%;
        margin: 0 auto;
        /*position: absolute;*/
        display: flex;
        align-items: center;
        font-size: 100px;
        font-weight: bold;
        color: #ddddc3;
    }
    .h {
        float: left;
        margin: 0 auto;
        width: 300px;
        height: 300px;
        background-color: #11110f;
        border-radius: 20px;
        /*position: relative;*/
        /*font-family: "华文细黑"*/
        font-weight: bold;
        /*align-items: center;*/
        display: flex;
    }

    .one{
        position: relative;
    }

    .line {
        width:100%;
        height: 8px;
        background-color: black;
        z-index: 10;
        margin-top: 10px;
        position: absolute;
        /*bottom: 150px;*/

    }

    .span {
        color: #e6e6d7;
        font-size: 250px;
        /*text-align: center;*/
        /*line-height: 300px;*/
        margin: 0 auto;
    }

    .am{
        position: absolute;
        color: #FFFFFF;
        bottom: 20px;
        font-size: 20px;
        font-weight: bold;
        left: 10px;
        text-shadow: 0 0 5px #ddddc3;
    }
    .heart{
        color: #FFFFFF;
        position: absolute;
        left:50px;
        bottom:20px;
        text-shadow: 0 0 15px #dd404a;
        animation: heart 1s ease infinite;
        font-size: 20px;

    }

    .sec{
        animation: X 1S ease infinite;
        /*position: absolute;*/
    }

    @keyframes X {
        0% {
            transform: rotateX(10deg) scale(0.98);
        }
        20%,60% {
            transform: rotateX(0deg) scale(1);
        }
        100% {
            transform: rotateX(10deg) scale(0.98);
        }
    }


    @keyframes heart{
        0%{
            transform: scale(1)
        }
        30%,70%{
            transform: scale(1.5)
        }
        100%{
            transform: scale(1);
        }

    }

</style>