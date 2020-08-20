import Vue from "vue";
import Vuex from "vuex";
import bingo from "./modules/bingo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bingo
  }
});
