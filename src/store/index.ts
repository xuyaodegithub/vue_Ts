import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    a:1
  },
  mutations: {},
  actions: {
    agActions(context){
      console.log(context)
    }
  },
  modules: {},
  getters:{
    ag:state=>state.a
  }
});
