<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
        <router-link to="/aaa">日环食</router-link> |
        <router-link to="/ccc">计数器</router-link> |
        <router-link to="/time">电脑时间</router-link> |
        <router-link to="/guess">猜数字</router-link> |
        <router-link to="/login">登陆</router-link> |
        <router-link to="/gap">我裂开了</router-link> |
        <router-link to="/form">表单</router-link> |
        <router-link to="/3D">3D</router-link> |


    </div>
    <router-view/>
  </div>
</template>

<style>

body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
