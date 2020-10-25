<template>
    <div id="app">
        <div id="box">
            <h1>login</h1>
            <form>
                <div class="inputBox">
                    <input type="text" name="" required="">
                    <label>username</label>
                </div>
                <div class="inputBox">
                    <input type="password" name="" required="">
                    <label>password</label>
                </div>
                <input type="submit" value="submit">
            </form>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    font-family: "Bell MT";

}
#app{
    width: 100%;
    height: 600px;
}
#box{
    position: absolute;
    top: 30%;
    left: 38%;
    /*transform: translate(-50%,-50%);*/
    background: rgba(0,0,0,0.3);
    padding: 40px;
    width: 350px;


    box-sizing: border-box;
    box-shadow: 5px 5px 5px rgba(0,0,0,.5);
    border-radius: 10px;
}
#box h1{
    margin: 0 0 30px;
    padding: 0;
    color: white;
    text-shadow: 1px 2px 2px #46ffc5;
    text-align: left;
}
#box .inputBox{
    position: relative;
}
#box .inputBox input{
    width: 100%;
    padding: 10px 0;
    font-size: 20px;
    color: white;
    letter-spacing: 1px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    border-bottom:1px solid white;

    background: transparent;
}

#box .inputBox label{
    letter-spacing: 1px;
    position: absolute;
    top: -20px;
    left: 0;
    padding: 10px 0;
    font-size: 20px;
    color: white;
    pointer-events: none;
    transition: .9s;
}

#box .inputBox input:focus ~ label
#box .inputBox input:valid ~ label
{
    top: -20px;
    left: 0;
    color:#42b983;
    font-size: 12px;
}

#box input[type="submit"]{
    background: transparent;
    border:none;
    outline: none;
    color: #FFFFFF;
    font-size: 20px;
    background: #42b983;
    padding: 5px 20px;
    border-radius: 5px;
    /*光标 指针*/
    cursor: pointer;
}

</style>