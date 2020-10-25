<template>
    <div id="container">
        <form class="content">
            <table>
                <tr>
                    <td>用户名</td>
                    <td><input type="text" name="username"></td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td><input type="password" name="userpsd"></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="text" name="useremail"></td>
                </tr>
                <tr>
                    <td>姓名</td>
                    <td><input type="text" name="Xm"></td>
                </tr>
                <tr>
                    <td>手机号</td>
                    <td><input type="text" name="phone"></td>
                </tr>
                <tr>
                    <td>性别</td>
                    <input type="radio" name='gender' value='1'/>男 <!--checked设置默认选中-->
                    <input type="radio" name='gender2' value='0'/>女  <!--单选按钮的value必须手动指定-->
                </tr>
                <tr>
                    <td>姓名</td>
                    <td><input type="text" name="Xm"></td>
                </tr>
                <tr>
                    <td>出生日期</td>
                    <td><input type="text" name="birth"></td>
                </tr>
                <tr>
                    <td>验证码</td>
                    <td><input type="text" name="code"></td>
                </tr>
                <tr class="">
                    <input type="submit" value='注册' />
                    <input type="reset" value='清空' />
                </tr>
            </table>
        </form>
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
        font-family: Arial;
    }
    #container{
        position: absolute;
        width: 100%;
        height: 400px;
        margin:0 auto;
        background: url("");
        background-size: cover;
        top: 20%;

    }
    .content{
        top: 50px;
        width: 500px;
        margin: 0 auto;
        border: 3px solid #e9e9e9;
        position: relative;
    }
    td{
        margin: auto;
        position: relative;
    }
</style>