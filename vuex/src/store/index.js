import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import buyCar from "./buyCar";

Vue.use(Vuex)

//将多组件共用的数据放置到此对象里
export default new Vuex.Store({
  //data
  state,
  getters,

  //methods
  mutations,
  //异步方法
  actions,

  //模块
  modules: {
    buyCar
  }
})
