import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats: [],
  },
  getters: {
    getCats: (state) => state.cats,
  },
  mutations: {
    SET_VALUE(state, object) {
      const [key] = Object.keys(object);
      state[key] = object[key];
    },
  },
  actions: {
    setValue({ commit }, object) {
      commit('SET_VALUE', object);
    },
  },
})
