<template>
    <div>
    <div class="gap">
        <section>
            <div class="section-item">
                <div class="a">Mate.</div>
                <div class="a">Mate.</div>
                <a href="">点赞了解更多</a>
            </div>
            <div class="section-item">
                <div class="a">Proj.</div>
                <div class="a">Proj.</div>
                <a href="">投币了解更多</a>
            </div>
            <div class="section-item">
                <div class="a">Post.</div>
                <div class="a">Post.</div>
                <a href="">收藏了解更多</a>
            </div>
        </section>

    </div>
    </div>
</template>

<script>
    export default {
        name: "light"
    }
</script>

<style lang="less" scoped>
    .section-item{
        .a{
            font-family: "Brush Script MT";
        }
    }
    /**{*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*    font-family: "Brush Script MT";*/
    /*}*/
    .gap{
        width: 100%;
        height: 100vh;
        background-color: #000;
        /*设置弹性布局*/
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section{
        width: 100%;
        height: 100px;
        /*border: 1px solid red;*/
        display: flex;
        justify-content: center;
        align-items: center;

        .section-item{
            /*border:1px solid blue;*/
            position: relative;
            display: flex;
            justify-content: space-around;
            align-items: center;
            transition: filter 0.5s,transform 0.5s;
        }

        .a{
            color:  #fff;
            font-size: 10vw;
            top:0px;
            opacity: 1;
            transition: top 0.5s,opacity 0.5s;
        }
    }

/*    切割文字*/
    section .section-item .a:nth-child(1){
        position: absolute;
        clip-path: polygon(0% 0%,100% 0%,100% 51%,0% 51%);
    }
    section .section-item .a:nth-child(2){
        position: relative;
        clip-path: polygon(0% 50%,100% 50%,100% 100%,0% 100%);
    }

/*    触发景深效果*/
    section:hover .section-item{
        filter: blur(5px);
        transform: scale(0.8);
        transition: filter 0.5s,transform 0.5s;
    }

/*    对应的取消景深效果*/
    section .section-item:hover{
        filter: blur(0px);
        transform: scale(1.1);
        transition: filter 0.5s,transform 0.5s;
    }

/*    上半部分上移并变淡*/
    section .section-item:hover .a:nth-child(1){
        top:-40px;
        opacity: 0.5;
        transition: top 0.5s,opacity 0.5s;
    }
    /*    下半部分下移并变淡*/
    section .section-item:hover .a:nth-child(2){
        top:40px;
        opacity: 0.5;
        transition: top 0.5s,opacity 0.5s;
    }
/*    a标签部分*/
    section .section-item a{
        position: absolute;
        color: #FFFFFF;
        text-decoration: none;
        opacity: 0;
        transition: opacity 0.5s;
    }
    section .section-item a:hover{
        text-decoration: underline;
    }
    section .section-item:hover a{
        opacity: 1;
        transition: opacity 0.5s;
    }
</style>